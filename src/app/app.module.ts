import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuemSomosComponent } from './pages/quem-somos/quem-somos.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { MidiaComponent } from './pages/midia/midia.component';
import { PostComponent } from './pages/post/post.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { CardComponent } from './shared/components/card/card.component';
import { NavListComponent } from './shared/components/nav-list/nav-list.component';
import { UserCardComponent } from './shared/components/user-card/user-card.component';
import { PortraitComponent } from './shared/components/portrait/portrait.component';
import { BtnComponent } from './shared/components/btn/btn.component';

@NgModule({
  declarations: [
    AppComponent,
    QuemSomosComponent,
    AgendaComponent,
    MidiaComponent,
    PostComponent,
    NavComponent,
    CardComponent,
    NavListComponent,
    UserCardComponent,
    PortraitComponent,
    BtnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
