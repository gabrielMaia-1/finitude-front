import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartaComponent } from './carta.component';
import { CartaRoutingModule } from './carta-routing.module';



@NgModule({
  declarations: [
    CartaComponent
  ],
  imports: [
    CommonModule,
    CartaRoutingModule
  ],
  exports:[
    
  ]
})
export class CartaModule { }
