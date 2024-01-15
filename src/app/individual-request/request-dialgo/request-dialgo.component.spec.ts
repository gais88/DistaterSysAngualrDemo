import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDialgoComponent } from './request-dialgo.component';

describe('RequestDialgoComponent', () => {
  let component: RequestDialgoComponent;
  let fixture: ComponentFixture<RequestDialgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestDialgoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestDialgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
