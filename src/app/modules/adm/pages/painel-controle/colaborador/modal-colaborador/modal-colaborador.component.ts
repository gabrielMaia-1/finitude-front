import { Component, Inject, OnInit } from '@angular/core';
import { MODAL_DATA, MODAL_REF } from 'src/app/core/modal.service';
import { ModalRef } from 'src/app/modules/adm/shared/model/ModalRef';

@Component({
  selector: 'fin-modal-colaborador',
  templateUrl: './modal-colaborador.component.html',
  styleUrls: ['./modal-colaborador.component.css']
})
export class ModalColaboradorComponent implements OnInit {

  constructor(@Inject(MODAL_DATA) private _data: any,
              @Inject(MODAL_REF) private _modal: ModalRef<ModalColaboradorComponent>) { }

  ngOnInit(): void { }

}
