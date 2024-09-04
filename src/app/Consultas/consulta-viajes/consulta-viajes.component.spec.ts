import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaViajesComponent } from './consulta-viajes.component';

describe('ConsultaViajesComponent', () => {
  let component: ConsultaViajesComponent;
  let fixture: ComponentFixture<ConsultaViajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaViajesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaViajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
