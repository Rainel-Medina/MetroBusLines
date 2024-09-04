import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasUsuariosComponent } from './consultas-usuarios.component';

describe('ConsultasUsuariosComponent', () => {
  let component: ConsultasUsuariosComponent;
  let fixture: ComponentFixture<ConsultasUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultasUsuariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultasUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
