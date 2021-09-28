import { Injector, Type } from "@angular/core";

export interface ComponentRecipe  {
    component:Type<unknown>;
    injector: Injector;
}