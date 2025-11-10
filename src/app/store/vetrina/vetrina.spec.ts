import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vetrina } from './vetrina';

describe('Vetrina', () => {
  let component: Vetrina;
  let fixture: ComponentFixture<Vetrina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Vetrina]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vetrina);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
