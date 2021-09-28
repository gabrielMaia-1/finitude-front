import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from './components/btn/btn.component';
import { CardComponent } from './components/card/card.component';
import { NavComponent } from './components/nav/nav.component';
import { NavListComponent } from './components/nav-list/nav-list.component';
import { PortraitComponent } from './components/portrait/portrait.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';



@NgModule({
  declarations: [
    NavComponent,
    CardComponent,
    NavListComponent,
    UserCardComponent,
    PortraitComponent,
    BtnComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavComponent,
    CardComponent,
    NavListComponent,
    UserCardComponent,
    PortraitComponent,
    BtnComponent,
    ModalComponent
  ]
})
export class SharedModule { }
