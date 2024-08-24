import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TWOPMBOSComponent } from './two-pm-bos.component';

describe('TWOPMBOSComponent', () => {
  let component: TWOPMBOSComponent;
  let fixture: ComponentFixture<TWOPMBOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TWOPMBOSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TWOPMBOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
