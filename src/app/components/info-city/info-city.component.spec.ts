import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InfoCityComponent} from './info-city.component';

describe('InfoCityComponent', () => {
  let component: InfoCityComponent;
  let fixture: ComponentFixture<InfoCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoCityComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
