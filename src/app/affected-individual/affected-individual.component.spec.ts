import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectedIndividualComponent } from './affected-individual.component';

describe('AffectedIndividualComponent', () => {
  let component: AffectedIndividualComponent;
  let fixture: ComponentFixture<AffectedIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffectedIndividualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffectedIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
