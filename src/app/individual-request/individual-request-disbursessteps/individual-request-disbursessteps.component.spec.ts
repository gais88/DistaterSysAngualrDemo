import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualRequestDisbursesstepsComponent } from './individual-request-disbursessteps.component';

describe('IndividualRequestDisbursesstepsComponent', () => {
  let component: IndividualRequestDisbursesstepsComponent;
  let fixture: ComponentFixture<IndividualRequestDisbursesstepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualRequestDisbursesstepsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualRequestDisbursesstepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
