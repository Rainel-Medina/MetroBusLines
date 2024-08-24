import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SEVENPMBOSComponent } from './seven-pm-bos.component';

describe('SEVENPMBOSComponent', () => {
  let component: SEVENPMBOSComponent;
  let fixture: ComponentFixture<SEVENPMBOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SEVENPMBOSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SEVENPMBOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
