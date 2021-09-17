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

@NgModule({
  declarations: [
    AppComponent,
    QuemSomosComponent,
    AgendaComponent,
    MidiaComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
