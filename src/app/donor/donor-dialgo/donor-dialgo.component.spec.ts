import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorDialgoComponent } from './donor-dialgo.component';

describe('DonorDialgoComponent', () => {
  let component: DonorDialgoComponent;
  let fixture: ComponentFixture<DonorDialgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonorDialgoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorDialgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
