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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalConfirmComponent } from './components/modal-confirm/modal-confirm.component';



@NgModule({
  declarations: [
    NavComponent,
    CardComponent,
    NavListComponent,
    UserCardComponent,
    PortraitComponent,
    BtnComponent,
    ModalComponent,
    ModalConfirmComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    NavComponent,
    CardComponent,
    NavListComponent,
    UserCardComponent,
    PortraitComponent,
    BtnComponent,
    ModalComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
