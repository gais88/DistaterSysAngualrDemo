import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDialgComponent } from './details-dialg.component';

describe('DetailsDialgComponent', () => {
  let component: DetailsDialgComponent;
  let fixture: ComponentFixture<DetailsDialgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsDialgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsDialgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
