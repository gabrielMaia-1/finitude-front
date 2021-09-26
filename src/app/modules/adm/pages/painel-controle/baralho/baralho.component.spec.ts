import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelBaralhoComponent } from './baralho.component';

describe('PainelBaralhoComponent', () => {
  let component: PainelBaralhoComponent;
  let fixture: ComponentFixture<PainelBaralhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelBaralhoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelBaralhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
