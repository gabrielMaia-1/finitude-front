import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable, of, Subscription } from 'rxjs';
import { FinApiService } from 'src/app/core/fin-api.service';
import { Colaborador } from 'src/app/shared/models/Colaborador';

@Component({
  selector: 'fin-quem-somos',
  templateUrl: './quem-somos.component.html',
  styleUrls: ['./quem-somos.component.css']
})
export class QuemSomosComponent implements OnInit {

  $listaColaboradores: Observable<Colaborador[]> = this._finApi.get<Colaborador[]>('user');

  constructor(private _finApi: FinApiService) { }

  ngOnInit(): void {  }

}
