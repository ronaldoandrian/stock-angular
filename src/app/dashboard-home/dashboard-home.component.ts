import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {
  admin = "";
  user: User;
  constructor(private router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('loginAdmin'));
    if(this.user === undefined || this.user === null) {
      this.router.navigate(['dashboard-login']);
    }
    // console.log(this.admin);
    // var token = (window.localStorage.getItem('token'));
    // this.admin = token;
  }
}