import { Component, ComponentFactoryResolver, Injector, Input, OnInit, QueryList, Type, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { ModalService } from 'src/app/core/modal.service';

@Component({
  selector: 'fin-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @ViewChildren('view') view!: QueryList<ViewContainerRef>;

  component$ = this._modal.watch();

  constructor(private _modal: ModalService) { }

  ngOnInit(): void {  }

  fechar(){
    this._modal.close();
  }
}
