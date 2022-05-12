import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplechildComponent } from './applechild.component';

describe('ApplechildComponent', () => {
  let component: ApplechildComponent;
  let fixture: ComponentFixture<ApplechildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplechildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplechildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
