import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegiondeplatillosComponent } from './regiondeplatillos.component';

describe('RegiondeplatillosComponent', () => {
  let component: RegiondeplatillosComponent;
  let fixture: ComponentFixture<RegiondeplatillosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegiondeplatillosComponent]
    });
    fixture = TestBed.createComponent(RegiondeplatillosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
