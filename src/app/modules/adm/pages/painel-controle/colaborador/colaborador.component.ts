import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FinApiService } from 'src/app/core/fin-api.service';
import { Colaborador } from 'src/app/shared/models/Colaborador';

@Component({
  selector: 'fin-painel-colaborador',
  templateUrl: './colaborador.component.html',
  styleUrls: ['./colaborador.component.css']
})
export class PainelColaboradorComponent implements OnInit {
  $listaColaboradores: Observable<Colaborador[]> = this._api.get<Colaborador[]>('user');

  constructor(private _api: FinApiService) { }

  ngOnInit(): void {
  }

  adicionar(){

  }

  editar(colaborador: Colaborador){
    console.log(colaborador)
  }
}
