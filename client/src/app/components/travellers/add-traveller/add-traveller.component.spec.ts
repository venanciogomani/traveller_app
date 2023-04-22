import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTravellerComponent } from './add-traveller.component';

describe('AddTravellerComponent', () => {
  let component: AddTravellerComponent;
  let fixture: ComponentFixture<AddTravellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTravellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTravellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
