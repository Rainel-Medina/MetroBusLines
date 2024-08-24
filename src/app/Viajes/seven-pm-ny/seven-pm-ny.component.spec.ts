import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SEVENPMNYComponent } from './seven-pm-ny.component';

describe('SEVENPMNYComponent', () => {
  let component: SEVENPMNYComponent;
  let fixture: ComponentFixture<SEVENPMNYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SEVENPMNYComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SEVENPMNYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
