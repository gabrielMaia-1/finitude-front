import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './core/auth-guard.service';

const routes: Routes = [
  {path: 'baralho', loadChildren: () => import('./modules/carta/carta.module').then(m => m.CartaModule)},
  {path: 'adm', loadChildren: () => import('./modules/adm/adm.module').then(m => m.AdmModule), canActivate: [AuthGuardService]},
  {path: '', pathMatch: 'full', redirectTo: 'adm'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
