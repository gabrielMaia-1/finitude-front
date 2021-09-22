import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'fin-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.css']
})
export class NavListComponent implements OnInit {

  @ContentChild(TemplateRef)
  navTemplate!: TemplateRef<any>;

  @Input('navList') list: any[] | null = [];

  constructor() { }

  ngOnInit(): void {
  }

}
