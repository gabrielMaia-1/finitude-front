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

  constructor(private _fb: FormBuilder,
              @Inject(MODAL_DATA) private _data: any,
              @Inject(MODAL_REF) private _modal: ModalRef<ModalColaboradorComponent>) {
                this.form = this._fb.group({
                  nome: [this._data.data.nome || ''],
                  cargo: [this._data.data.cargo || ''],
                  descricao: [this._data.data.descricao || ''],
                  citacao: [this._data.data.citacao || '']
                });
              }

  ngOnInit(): void {

  }

  salvar(){
    this._modal.close(this.form.value)
  }

  cancelar(){
    this._modal.close();
  }

}
