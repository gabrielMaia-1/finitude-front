import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FinApiService } from 'src/app/core/fin-api.service';
import { ModalService } from 'src/app/core/modal.service';
import { Colaborador } from 'src/app/shared/models/Colaborador';
import { ModalColaboradorComponent } from './modal-colaborador/modal-colaborador.component';

@Component({
  selector: 'fin-painel-colaborador',
  templateUrl: './colaborador.component.html',
  styleUrls: ['./colaborador.component.css']
})
export class PainelColaboradorComponent implements OnInit {
  $listaColaboradores: Observable<Colaborador[]> = this._api.get<Colaborador[]>('user');

  constructor(private _api: FinApiService,
              private _modal: ModalService) { }

  ngOnInit(): void {
  }

  adicionar(){

  }

  editar(colaborador: Colaborador){
    this._modal.open<ModalColaboradorComponent>(ModalColaboradorComponent,{data: colaborador})
    .onClose()
    .subscribe(val => {
      console.log(val)
    })
  }
}
