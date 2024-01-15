import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualRequestDetailsComponent } from './individual-request-details.component';

describe('IndividualRequestDetailsComponent', () => {
  let component: IndividualRequestDetailsComponent;
  let fixture: ComponentFixture<IndividualRequestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualRequestDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
