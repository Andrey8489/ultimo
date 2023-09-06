import { TestBed } from '@angular/core/testing';

import { ServicioPlatillosService } from './servicio-platillos.service';

describe('ServicioPlatillosService', () => {
  let service: ServicioPlatillosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioPlatillosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
