import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../core/api.service";
import {User} from "../model/user.model";
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  invalidLogin: boolean = false;
  
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
}

  onSubmit() {
    //this.router.navigate(['add-user']);
    if (this.loginForm.invalid) {
      return;
    }
    const user = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    }
    this.apiService.login(user).subscribe(data => {
      //debugger;
      if(data.etat === 200) {
        window.localStorage.setItem('currentUser', JSON.stringify(data.objet));
        this.currentUserSubject.next(data.objet);
        this.router.navigate(['insert-mouvement']);
      }else {
        this.invalidLogin = true;
      }
    });
  }

  ngOnInit() {
    window.localStorage.removeItem('currentUser');
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }



}
