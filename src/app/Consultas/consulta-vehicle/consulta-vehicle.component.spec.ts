import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaVehicleComponent } from './consulta-vehicle.component';

describe('ConsultaVehicleComponent', () => {
  let component: ConsultaVehicleComponent;
  let fixture: ComponentFixture<ConsultaVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaVehicleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
