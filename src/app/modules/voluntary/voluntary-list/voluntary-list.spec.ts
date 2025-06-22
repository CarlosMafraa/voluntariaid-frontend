import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoluntaryList } from './voluntary-list';

describe('VoluntaryList', () => {
  let component: VoluntaryList;
  let fixture: ComponentFixture<VoluntaryList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoluntaryList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoluntaryList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
