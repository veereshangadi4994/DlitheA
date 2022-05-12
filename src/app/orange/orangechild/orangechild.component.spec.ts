import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrangechildComponent } from './orangechild.component';

describe('OrangechildComponent', () => {
  let component: OrangechildComponent;
  let fixture: ComponentFixture<OrangechildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrangechildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrangechildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
