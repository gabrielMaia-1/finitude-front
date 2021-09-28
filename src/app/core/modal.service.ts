import { Component, ComponentRef, Injectable, Injector, ResolvedReflectiveFactory, Type } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { ModalRef } from '../modules/adm/shared/model/ModalRef';
import { ComponentRecipe } from '../shared/models/ComponentRecipe';

export const MODAL_DATA = 'MODAL_DATA'
export const MODAL_REF = 'MODAL_REF'

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  load$ = new Subject<ComponentRecipe>();
  close$ = new Subject<void>();

  constructor(private _injector: Injector) { }

  open<T>(component: Type<T>,data?: any){
    const modalRef = new ModalRef<T>(this);
    const injector = Injector.create({providers:[
      {provide: MODAL_DATA, useValue:data},
      {provide: MODAL_REF, useValue: modalRef}
    ],parent: this._injector});
  
    this.load$.next({component: component, injector: injector});
    return modalRef;
  }

  watch(){
    return this.load$.asObservable();
  }

  close(){
    this.load$.next();
  }
}
