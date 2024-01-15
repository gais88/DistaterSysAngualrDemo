import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AidDialgoComponent } from './aid-dialgo.component';

describe('AidDialgoComponent', () => {
  let component: AidDialgoComponent;
  let fixture: ComponentFixture<AidDialgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AidDialgoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AidDialgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
