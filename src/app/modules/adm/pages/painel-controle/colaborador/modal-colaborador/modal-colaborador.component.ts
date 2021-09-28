import { Component, Inject, OnInit, SkipSelf } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MODAL_DATA, MODAL_REF } from 'src/app/core/modal.service';
import { ModalRef } from 'src/app/modules/adm/shared/model/ModalRef';

@Component({
  selector: 'fin-modal-colaborador',
  templateUrl: './modal-colaborador.component.html',
  styleUrls: ['./modal-colaborador.component.css']
})
export class ModalColaboradorComponent implements OnInit {

  form: FormGroup;

  constructor(@SkipSelf() private _fb: FormBuilder,
              @Inject(MODAL_DATA) private _data: any,
              @Inject(MODAL_REF) private _modal: ModalRef<ModalColaboradorComponent>) {
                this.form = this._fb.group({
                  nome: [_data.nome || ''],
                  cargo: [_data.cargo || ''],
                  descricao: [_data.descricao || ''],
                  citacao: [_data.citacao || '']
                });
              }

  ngOnInit(): void {

  }

}
