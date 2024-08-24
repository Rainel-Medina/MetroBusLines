import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FIVEAMBOSComponent } from './five-am-bos.component';

describe('FIVEAMBOSComponent', () => {
  let component: FIVEAMBOSComponent;
  let fixture: ComponentFixture<FIVEAMBOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FIVEAMBOSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FIVEAMBOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
