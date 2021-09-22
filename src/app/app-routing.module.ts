import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'carta', loadChildren: () => import('./modules/carta/carta.module').then(m => m.CartaModule)},
  {path: 'adm', loadChildren: () => import('./modules/adm/adm.module').then(m => m.AdmModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
