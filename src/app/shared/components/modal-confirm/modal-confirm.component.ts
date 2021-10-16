import { Component, Inject, OnInit } from '@angular/core';
import { MODAL_DATA, MODAL_REF } from 'src/app/core/modal.service';
import { ModalRef } from 'src/app/modules/adm/shared/model/ModalRef';

@Component({
  selector: 'fin-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.css']
})
export class ModalConfirmComponent implements OnInit {

  constructor(@Inject(MODAL_DATA) public _data: any,
              @Inject(MODAL_REF) public _modal: ModalRef<ModalConfirmComponent>) { }

  ngOnInit(): void {
  }

}
