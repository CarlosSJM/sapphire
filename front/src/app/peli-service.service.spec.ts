import { TestBed } from '@angular/core/testing';

import { PeliServiceService } from './peli-service.service';

describe('PeliServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeliServiceService = TestBed.get(PeliServiceService);
    expect(service).toBeTruthy();
  });
});
