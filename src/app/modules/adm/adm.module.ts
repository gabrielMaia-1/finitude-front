import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmRoutingModule } from './adm-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AdmLoginComponent } from './pages/adm-login/adm-login.component';
import { PainelBaralhoComponent } from './pages/painel-controle/baralho/baralho.component';
import { PainelControleComponent } from './pages/painel-controle/painel-controle.component';
import { SideNavComponent } from './pages/painel-controle/side-nav/side-nav.component';
import { PainelColaboradorComponent } from './pages/painel-controle/colaborador/colaborador.component';



@NgModule({
  declarations: [
    AdmLoginComponent,
    PainelControleComponent,
    SideNavComponent,
    PainelBaralhoComponent,
    PainelColaboradorComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,

    AdmRoutingModule
  ]
})
export class AdmModule { }
