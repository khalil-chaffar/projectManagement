import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ajoutemployer } from './ajoutemployer';

describe('Ajoutemployer', () => {
  let component: Ajoutemployer;
  let fixture: ComponentFixture<Ajoutemployer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ajoutemployer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ajoutemployer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
