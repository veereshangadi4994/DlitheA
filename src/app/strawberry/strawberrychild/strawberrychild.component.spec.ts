import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrawberrychildComponent } from './strawberrychild.component';

describe('StrawberrychildComponent', () => {
  let component: StrawberrychildComponent;
  let fixture: ComponentFixture<StrawberrychildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrawberrychildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrawberrychildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
