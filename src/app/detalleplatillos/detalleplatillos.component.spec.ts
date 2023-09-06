import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleplatillosComponent } from './detalleplatillos.component';

describe('DetalleplatillosComponent', () => {
  let component: DetalleplatillosComponent;
  let fixture: ComponentFixture<DetalleplatillosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleplatillosComponent]
    });
    fixture = TestBed.createComponent(DetalleplatillosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
