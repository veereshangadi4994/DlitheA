import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinneapplechildComponent } from './pinneapplechild.component';

describe('PinneapplechildComponent', () => {
  let component: PinneapplechildComponent;
  let fixture: ComponentFixture<PinneapplechildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinneapplechildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PinneapplechildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
