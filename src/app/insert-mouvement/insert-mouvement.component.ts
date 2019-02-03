import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-insert-mouvement',
  templateUrl: './insert-mouvement.component.html',
  styleUrls: ['./insert-mouvement.component.css']
})
export class InsertMouvementComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      date: ['', Validators.required],
      produit: ['', Validators.required],
      quantite: ['', Validators.required],
      prix: ['', Validators.required],
      type: ['', Validators.required],
      magasin: ['', Validators.required]
    });

  }

  onSubmit() {
    console.log(this.addForm.value);
    if(this.addForm.controls['magasin'].value === '') {
      this.addForm.controls['magasin'].hasError('required');
    }
    this.apiService.createUser(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-user']);
      });
  }

}
