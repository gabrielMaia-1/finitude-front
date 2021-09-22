import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmLoginComponent } from './components/adm-login/adm-login.component';

const routes: Routes = [
  {path: 'login',component: AdmLoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmRoutingModule { }
