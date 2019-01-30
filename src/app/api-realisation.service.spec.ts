import { TestBed } from '@angular/core/testing';

import { ApiRealisationService } from './api-realisation.service';

describe('ApiRealisationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiRealisationService = TestBed.get(ApiRealisationService);
    expect(service).toBeTruthy();
  });
});
