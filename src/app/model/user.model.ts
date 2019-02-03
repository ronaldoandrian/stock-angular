import { Injectable } from '@angular/core';

@Injectable()
export class User {
  id: number;
  nom: String;
  prenoms: String;
  adresse_mail: String;
  mot_de_passe: String;
}

