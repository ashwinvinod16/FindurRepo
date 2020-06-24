import { TestBed } from '@angular/core/testing';

import { FindRepoService } from './find-repo.service';

describe('FindRepoService', () => {
  let service: FindRepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
