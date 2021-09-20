import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MidiaComponent } from './pages/midia/midia.component';
import { QuemSomosComponent } from './pages/quem-somos/quem-somos.component';
import { ServicosComponent } from './pages/servicos/servicos.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path:'quem-somos',component:QuemSomosComponent},
  {path: 'agenda', component: AgendaComponent},
  {path: 'midia', component: MidiaComponent},
  {path: 'servicos', component: ServicosComponent},
  {path: '', pathMatch: 'full',redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
