import { TestBed } from '@angular/core/testing';

import { ClimaGeneralService } from './clima-general.service';

describe('ClimaGeneralService', () => {
  let service: ClimaGeneralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClimaGeneralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
