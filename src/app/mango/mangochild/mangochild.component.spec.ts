import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangochildComponent } from './mangochild.component';

describe('MangochildComponent', () => {
  let component: MangochildComponent;
  let fixture: ComponentFixture<MangochildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangochildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MangochildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
