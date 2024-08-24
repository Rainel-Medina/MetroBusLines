import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TWOPMNYComponent } from './two-pm-ny.component';

describe('TWOPMNYComponent', () => {
  let component: TWOPMNYComponent;
  let fixture: ComponentFixture<TWOPMNYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TWOPMNYComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TWOPMNYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
