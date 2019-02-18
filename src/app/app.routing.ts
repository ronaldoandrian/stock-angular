import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import { InsertMouvementComponent } from './insert-mouvement/insert-mouvement.component';
import { DashboardLoginComponent } from './dashboard-login/dashboard-login.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'report', component: ReportComponent },
  { path: 'insert-mouvement', component: InsertMouvementComponent },
  { path: 'dashboard-login', component: DashboardLoginComponent},
  { path: 'admin', component: DashboardLoginComponent},
  { path: 'dashboard', component: DashboardHomeComponent},
  {path : '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(routes);
