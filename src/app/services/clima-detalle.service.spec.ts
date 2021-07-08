import { TestBed } from '@angular/core/testing';

import { ClimaDetalleService } from './clima-detalle.service';

describe('ClimaDetalleService', () => {
  let service: ClimaDetalleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClimaDetalleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
