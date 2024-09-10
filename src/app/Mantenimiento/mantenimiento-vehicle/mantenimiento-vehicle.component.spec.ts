import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoVehicleComponent } from './mantenimiento-vehicle.component';

describe('MantenimientoVehicleComponent', () => {
  let component: MantenimientoVehicleComponent;
  let fixture: ComponentFixture<MantenimientoVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MantenimientoVehicleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantenimientoVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
