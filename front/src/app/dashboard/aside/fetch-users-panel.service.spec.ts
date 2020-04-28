import { TestBed } from '@angular/core/testing';

import { FetchUsersPanelService } from './fetch-users-panel.service';

describe('FetchUsersPanelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchUsersPanelService = TestBed.get(FetchUsersPanelService);
    expect(service).toBeTruthy();
  });
});
