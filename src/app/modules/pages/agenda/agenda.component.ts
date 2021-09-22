import { Component, OnInit } from '@angular/core';
import { FinApiService } from 'src/app/core/fin-api.service';
import { Evento } from 'src/app/shared/models/Agenda';

@Component({
  selector: 'fin-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  $eventoList = this._finApi.get<Evento[]>('agenda/proximosEventos')

  constructor(private _finApi: FinApiService) { }

  ngOnInit(): void {
  }

}
