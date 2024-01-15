import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualRequestComponent } from './individual-request.component';

describe('IndividualRequestComponent', () => {
  let component: IndividualRequestComponent;
  let fixture: ComponentFixture<IndividualRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
