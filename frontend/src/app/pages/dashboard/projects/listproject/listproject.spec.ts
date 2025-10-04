import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listproject } from './listproject';

describe('Listproject', () => {
  let component: Listproject;
  let fixture: ComponentFixture<Listproject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listproject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listproject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
