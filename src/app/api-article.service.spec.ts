import { TestBed } from '@angular/core/testing';

import { ApiArticleService } from './api-article.service';

describe('ApiArticleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiArticleService = TestBed.get(ApiArticleService);
    expect(service).toBeTruthy();
  });
});
