import { TestBed } from '@angular/core/testing';

import { FetchVideosService } from './fetch-videos.service';

describe('FetchVideosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchVideosService = TestBed.get(FetchVideosService);
    expect(service).toBeTruthy();
  });
});
