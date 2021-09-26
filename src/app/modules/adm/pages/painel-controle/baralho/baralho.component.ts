import { Component, OnInit } from '@angular/core';
import { FinApiService } from 'src/app/core/fin-api.service';
import { FinLink } from '../../../shared/model/FinLink';

@Component({
  selector: 'fin-baralho',
  templateUrl: './baralho.component.html',
  styleUrls: ['./baralho.component.css']
})
export class PainelBaralhoComponent implements OnInit {

  links: FinLink[] = [];
  constructor(private _api: FinApiService) { }

  ngOnInit(): void {
    this._api.get<FinLink[]>('baralho/keys').subscribe(val => {
      this.links = val;
    })
  }
  adicionarLink(){
    this._api.get<FinLink>('baralho/registra').subscribe(res => {
      this.links.push(res);
    })
  }

  copiaLinnk(key: string){
    navigator.clipboard.writeText(`${window.location.origin}/baralho?key=${key}`)
  }

  excluirLink(key: string){
    this._api.delete(`baralho/${key}`).subscribe(res => {
      const i = this.links.findIndex(o => o.key == key);
      if(i == -1) return;
      this.links.splice(i,1);
    })
  }
}