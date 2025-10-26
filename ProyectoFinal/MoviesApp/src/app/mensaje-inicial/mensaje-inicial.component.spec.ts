import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeInicialComponent } from './mensaje-inicial.component';

describe('MensajeInicialComponent', () => {
  let component: MensajeInicialComponent;
  let fixture: ComponentFixture<MensajeInicialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MensajeInicialComponent]
    });
    fixture = TestBed.createComponent(MensajeInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
