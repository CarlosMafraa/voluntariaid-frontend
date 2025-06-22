import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoluntaryDetails } from './voluntary-details';

describe('VoluntaryDetails', () => {
  let component: VoluntaryDetails;
  let fixture: ComponentFixture<VoluntaryDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoluntaryDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoluntaryDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
