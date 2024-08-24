import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TENAMBOSComponent } from './ten-am-bos.component';

describe('TENAMBOSComponent', () => {
  let component: TENAMBOSComponent;
  let fixture: ComponentFixture<TENAMBOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TENAMBOSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TENAMBOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
