import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoluntaryForm } from './voluntary-form';

describe('VoluntaryForm', () => {
  let component: VoluntaryForm;
  let fixture: ComponentFixture<VoluntaryForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoluntaryForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoluntaryForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
