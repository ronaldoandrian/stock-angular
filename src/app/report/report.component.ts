import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  reportForm: FormGroup;
  erreur: boolean = false;
  succes = "";
  error = "";
  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  onSubmit() {
    const report = {
      datereport: this.reportForm.controls.date.value,
      nomproduit: this.reportForm.controls.produit.value,
      magasin: this.reportForm.controls.magasin.value,
      quantite: this.reportForm.controls.quantite.value
    }
    this.error = "";
    this.succes = "";
    this.apiService.insertreport(report).subscribe(data => {
      if(data.etat === 200 || data.objet === true) {
        this.error = "";
        this.succes = "Insertion report avec succes!";
        this.router.navigate(['report']);
      }else {
        this.error = "Une erreur s'est produite: "+data.message+"!";
        this.succes = "";
      }
    });
  }

  ngOnInit() {
    window.localStorage.removeItem('token');
    this.reportForm = this.formBuilder.group({
      date: ['', Validators.compose([Validators.required])],
      magasin: ['', Validators.compose([Validators.required])],
      produit: ['', Validators.compose([Validators.required])],
      quantite: ['', Validators.required]
    });
  }

}
