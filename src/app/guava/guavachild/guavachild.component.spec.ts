import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuavachildComponent } from './guavachild.component';

describe('GuavachildComponent', () => {
  let component: GuavachildComponent;
  let fixture: ComponentFixture<GuavachildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuavachildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuavachildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
