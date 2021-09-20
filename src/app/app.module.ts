import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuemSomosComponent } from './pages/quem-somos/quem-somos.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { MidiaComponent } from './pages/midia/midia.component';
import { PostComponent } from './pages/post/post.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    QuemSomosComponent,
    AgendaComponent,
    MidiaComponent,
    PostComponent,
    InicioComponent,
    ServicosComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
