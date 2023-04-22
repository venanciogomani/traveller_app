import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTravellerComponent } from './view-traveller.component';

describe('ViewTravellerComponent', () => {
  let component: ViewTravellerComponent;
  let fixture: ComponentFixture<ViewTravellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTravellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTravellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
