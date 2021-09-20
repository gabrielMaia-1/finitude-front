import { TestBed } from '@angular/core/testing';

import { FinApiService } from './fin-api.service';

describe('FinApiService', () => {
  let service: FinApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
