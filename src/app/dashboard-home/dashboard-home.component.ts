import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {
  admin = "";
  constructor() { }

  ngOnInit() {
    // console.log(this.admin);
    // var token = (window.localStorage.getItem('token'));
    // this.admin = token;
  }
}