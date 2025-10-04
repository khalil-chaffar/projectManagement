import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Previewproject } from './previewproject';

describe('Previewproject', () => {
  let component: Previewproject;
  let fixture: ComponentFixture<Previewproject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Previewproject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Previewproject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
