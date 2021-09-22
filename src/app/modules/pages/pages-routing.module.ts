import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AgendaComponent } from "./agenda/agenda.component";
import { InicioComponent } from "./inicio/inicio.component";
import { MidiaComponent } from "./midia/midia.component";
import { QuemSomosComponent } from "./quem-somos/quem-somos.component";
import { ServicosComponent } from "./servicos/servicos.component";

const routes: Routes = [
    {path: 'inicio', component: InicioComponent},
    {path: 'quem-somos',component:QuemSomosComponent},
    {path: 'agenda', component: AgendaComponent},
    {path: 'midia', component: MidiaComponent},
    {path: 'servicos', component: ServicosComponent},
    {path: 'agenda/:data', component: AgendaComponent},
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export default class PagesModule {}