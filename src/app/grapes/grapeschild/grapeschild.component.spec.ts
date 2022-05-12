import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrapeschildComponent } from './grapeschild.component';

describe('GrapeschildComponent', () => {
  let component: GrapeschildComponent;
  let fixture: ComponentFixture<GrapeschildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrapeschildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrapeschildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
