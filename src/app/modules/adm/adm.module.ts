import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmRoutingModule } from './adm-routing.module';
import { AdmLoginComponent } from './components/adm-login/adm-login.component';


@NgModule({
  declarations: [
    AdmLoginComponent
  ],
  imports: [
    CommonModule,
    AdmRoutingModule
  ]
})
export class AdmModule { }
