import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FIVEAMNYComponent } from './five-am-ny.component';

describe('FIVEAMNYComponent', () => {
  let component: FIVEAMNYComponent;
  let fixture: ComponentFixture<FIVEAMNYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FIVEAMNYComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FIVEAMNYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
