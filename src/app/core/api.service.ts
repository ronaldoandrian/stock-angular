import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from "../model/user.model";
import {Observable} from "rxjs/index";
import {ApiResponse} from "../model/api.response";

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:4200/';
  apiUrl: string = 'https://­back-stock.herokuapp.­com/';

  insertMouvement(mouvement) : Observable<ApiResponse> {
    let getHeaders2: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    var entree = 0, sortie = mouvement.quantite;
    if(mouvement.type !== "Sortie") {
      entree = mouvement.quantite;
      sortie = 0;
    }
    let getHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    var json ="mouvement/insertMouvement/"+mouvement.date+"/"+mouvement.produit+"/"+entree+"/"+sortie+"/"+mouvement.prix+"/"+mouvement.magasin;
    return this.http.get<ApiResponse>(this.apiUrl+json,{headers:getHeaders});
  }

  login(loginPayload) : Observable<ApiResponse> {
    let getHeaders2: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    var json ="username="+loginPayload.username+"&password="+loginPayload.password;

    return this.http.post<ApiResponse>(this.apiUrl+'utilisateur/getUser',json,{headers:getHeaders2});
  }

  getUsers() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getUserById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + id);
  }

  createUser(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, user);
  }

  updateUser(user: User): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + user.id, user);
  }

  deleteUser(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }
}
