import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listemployer } from './listemployer';

describe('Listemployer', () => {
  let component: Listemployer;
  let fixture: ComponentFixture<Listemployer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listemployer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listemployer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
