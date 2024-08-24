import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TENAMNYComponent } from './ten-am-ny.component';

describe('TENAMNYComponent', () => {
  let component: TENAMNYComponent;
  let fixture: ComponentFixture<TENAMNYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TENAMNYComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TENAMNYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
