import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fin-card',
  template: `
  <div class="card-container">
    <ng-content></ng-content>
  </div>
  `,
  styles: [`
  :host {
    display: block;
    position: relative;
    overflow: hidden;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 15px #00000040;
    margin-top: 2rem;
  }

  .card-container {
      border-left: 15px solid var(--color-primary);
      height: 100%;
      padding: 1rem;
  }
  `]
})
export class CardComponent implements OnInit {

  @Input('width') width: string = ''
  @HostBinding('style.width') hostWidth = this.width;

  constructor() { }

  ngOnInit(): void { }

}
