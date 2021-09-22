import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CartaComponent } from "./carta.component";
const carta: Routes = [
    {path: '', component: CartaComponent}
];

@NgModule({
    imports: [RouterModule.forChild(carta)],
    exports: [RouterModule]
  })
  export class CartaRoutingModule { }