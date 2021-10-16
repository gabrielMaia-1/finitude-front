import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FinApiService } from 'src/app/core/fin-api.service';
import { ModalService } from 'src/app/core/modal.service';
import { fadeAnimation } from 'src/app/shared/animations/fade';
import { ModalConfirmComponent } from 'src/app/shared/components/modal-confirm/modal-confirm.component';
import { Colaborador } from 'src/app/shared/models/Colaborador';
import { ModalColaboradorComponent } from './modal-colaborador/modal-colaborador.component';

@Component({
  selector: 'fin-painel-colaborador',
  templateUrl: './colaborador.component.html',
  styleUrls: ['./colaborador.component.css'],
  animations: [fadeAnimation]
})
export class PainelColaboradorComponent implements OnInit {
  $listaColaboradores: Observable<Colaborador[]> = this._api.get<Colaborador[]>('user');

  constructor(private _api: FinApiService,
              private _modal: ModalService) { }

  ngOnInit(): void {
  }

  adicionar(){
    this._modal.open<ModalColaboradorComponent>(ModalColaboradorComponent,{data: {}})
    .onClose()
    .subscribe(val => {
      console.log(val)
      this._api.post('user',val).subscribe();
    })
  }

  editar(colaborador: Colaborador){
    this._modal.open<ModalColaboradorComponent>(ModalColaboradorComponent,{data: colaborador})
    .onClose()
    .subscribe(val => {
      this._api.put(`user/${colaborador.id}`,val).subscribe();
    })
  }

  excluir(colaborador: Colaborador){
    this._modal.open<ModalConfirmComponent>(ModalConfirmComponent,{data: {
      mensagem: "Voce deseja realmente excluir este colaborador?"
    }})
    .onClose()
    .subscribe(val => {
      if(!val) return;
      this._api.delete(`user/${colaborador.id}`).subscribe();
    })
  }
}
