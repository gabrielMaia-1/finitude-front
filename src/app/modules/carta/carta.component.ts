import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of, timer } from 'rxjs';
import {  catchError, finalize, map, take } from 'rxjs/operators';
import { FinApiService } from 'src/app/core/fin-api.service';
import { FiinitudeCarta } from './models/Carta';

@Component({
  selector: 'fin-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
  animations: [
    trigger('flip', [
      state('front', style({
        backgroundColor: 'white',
        color: 'inherit',
        transform: 'rotate3d(0, 0, 0, 0deg)'
      })),
      state('side', style({
        backgroundColor: '#547e5d',
        color: '#00000000',
        transform: 'rotate3d(1, 1, 0, 90deg)'
      })),
      state('back', style({
        backgroundColor: '#547e5d',
        color: '#00000000',
        transform: 'rotate3d(1, 1, 0, 90deg)'
      })),
      transition('front => side', [
        animate('0.5s', keyframes([
          style({ transform: 'rotate3d(1, 1, 0, 0deg)', color: 'inherit'}),
          style({ transform: 'rotate3d(1, 1, 0, 90deg)', color: '#00000000'}),
        ])),
      ]),
      transition('side => back', [
        animate('1s', keyframes([
          style({ transform: 'rotate3d(1, 1, 0, 90deg)'}),
          style({ transform: 'rotate3d(1, 1, 0, 0deg)'}),
          style({ transform: 'rotate3d(1, 1, 0, 90deg)'}),
        ])),
      ]),
      transition('back => front', [
        animate('0.5s', keyframes([
          style({ transform: 'rotate3d(1, 1, 0, 90deg)', backgroundColor: 'white', color: '#00000000'}),
          style({ transform: 'rotate3d(1, 1, 0, 0deg)', backgroundColor: 'white', color: 'inherit'}),
        ])),
      ])
    ])
  ]
})
export class CartaComponent implements OnInit {
  readonly CARTA_DEFAULT = '<h2 class="text-center">Clique - me</h2>';
  $animationState = of('front');
  $carta: Observable<string> = of(this.CARTA_DEFAULT);

  constructor(public _route: ActivatedRoute,
              private _api: FinApiService) { }

  ngOnInit(): void {  }

  triggerAnimation(){
    this.$animationState = timer(1,1000)
    .pipe(
      take(4),
      map(i => ['front', 'side', 'back', 'front'][i]),
      finalize(() => {
        this.$carta = this._api.get<FiinitudeCarta>(`baralho?key=${this._route.snapshot.queryParams.key || 0}`)
        .pipe(
          map(res => res.conteudo),
          catchError(err => {
            return of(this.CARTA_DEFAULT)
          })
          );
      }));
  }

}

