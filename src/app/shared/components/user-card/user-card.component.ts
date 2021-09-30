import { Component, Input, OnInit } from '@angular/core';
import { Colaborador } from '../../models/Colaborador';

@Component({
  selector: 'fin-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input('colaborador') colaborador!: Colaborador;
  readonly iconesContato: any = {
    instagram: 'fab fa-instagram',
    whatsapp: 'fab fa-whatsapp',
    telefone: 'fas fa-phone'
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
