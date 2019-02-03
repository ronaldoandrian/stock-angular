import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {ListUserComponent} from "./list-user/list-user.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import { InsertMouvementComponent } from './insert-mouvement/insert-mouvement.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'insert-mouvement', component: InsertMouvementComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'edit-user', component: EditUserComponent },
  {path : '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(routes);
