import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../core/api.service';
import { Observable, merge, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-insert-mouvement',
  templateUrl: './insert-mouvement.component.html',
  styleUrls: ['./insert-mouvement.component.css'],
  exportAs: 'ngbTypeahead'
})
export class InsertMouvementComponent implements OnInit {

  filteredUsers: any;
  isLoading = false;
  model: any;
  error = "";
  success = "";

  @ViewChild('instance') instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

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
    this.error = "";
    this.success = "";
    if(this.addForm.controls['magasin'].value === '') {
      this.addForm.controls['magasin'].hasError('required');
    }
    this.apiService.insertMouvement(this.addForm.value)
      .subscribe( data => {
        if(data.etat == 200) {
          this.success = data.message+"";
          this.error = "";
        }
        else {
          this.success  = "";
          this.error = ""+data.message;
        }
        this.router.navigate(['insert-mouvement']);
      });
  }
}
