import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BananachildComponent } from './bananachild.component';

describe('BananachildComponent', () => {
  let component: BananachildComponent;
  let fixture: ComponentFixture<BananachildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BananachildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BananachildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
