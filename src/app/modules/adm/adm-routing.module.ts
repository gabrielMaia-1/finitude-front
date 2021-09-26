import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/core/auth-guard.service';
import { AdmLoginComponent } from './pages/adm-login/adm-login.component';
import { PainelBaralhoComponent } from './pages/painel-controle/baralho/baralho.component';
import { PainelColaboradorComponent } from './pages/painel-controle/colaborador/colaborador.component';
import { PainelControleComponent } from './pages/painel-controle/painel-controle.component';


const routes: Routes = [
  {path: 'login',component: AdmLoginComponent},
  {path: '', canActivate: [AuthGuardService], component: PainelControleComponent, children:[
    {path: 'baralho', component: PainelBaralhoComponent},
    {path: 'colaborador', component: PainelColaboradorComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmRoutingModule { }
