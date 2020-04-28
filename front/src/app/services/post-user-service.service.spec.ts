import { TestBed } from '@angular/core/testing';

import { PostUserServiceService } from './post-user-service.service';

describe('PostUserServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostUserServiceService = TestBed.get(PostUserServiceService);
    expect(service).toBeTruthy();
  });
});
