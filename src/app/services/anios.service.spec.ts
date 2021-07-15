import { TestBed } from '@angular/core/testing';

import { AniosService } from './anios.service';

describe('AniosService', () => {
  let service: AniosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AniosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
