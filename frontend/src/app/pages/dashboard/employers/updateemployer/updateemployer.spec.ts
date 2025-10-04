import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updateemployer } from './updateemployer';

describe('Updateemployer', () => {
  let component: Updateemployer;
  let fixture: ComponentFixture<Updateemployer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Updateemployer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updateemployer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
