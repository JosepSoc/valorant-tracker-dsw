import { TestBed } from '@angular/core/testing';

import { MatchsHistoryService } from './matchs-history.service';

describe('MatchsHistoryService', () => {
  let service: MatchsHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchsHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
