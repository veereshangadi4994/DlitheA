import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinneappleComponent } from './pinneapple.component';

describe('PinneappleComponent', () => {
  let component: PinneappleComponent;
  let fixture: ComponentFixture<PinneappleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinneappleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PinneappleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
