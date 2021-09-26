import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AgendaComponent } from './agenda/agenda.component';
import { InicioComponent } from './inicio/inicio.component';
import { MidiaComponent } from './midia/midia.component';
import { PostComponent } from './post/post.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { ServicosComponent } from './servicos/servicos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { PagesComponent } from './pages.component';



@NgModule({
  declarations: [
    PagesComponent,
    AgendaComponent,
    InicioComponent,
    MidiaComponent,
    PostComponent,
    QuemSomosComponent,
    ServicosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class PagesModule { }
