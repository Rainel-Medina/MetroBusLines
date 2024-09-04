import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaMantenVehicleComponent } from './consulta-manten-vehicle.component';

describe('ConsultaMantenVehicleComponent', () => {
  let component: ConsultaMantenVehicleComponent;
  let fixture: ComponentFixture<ConsultaMantenVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaMantenVehicleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaMantenVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
