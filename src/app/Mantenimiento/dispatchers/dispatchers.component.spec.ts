import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchersComponent } from './dispatchers.component';

describe('DispatchersComponent', () => {
  let component: DispatchersComponent;
  let fixture: ComponentFixture<DispatchersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DispatchersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispatchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
