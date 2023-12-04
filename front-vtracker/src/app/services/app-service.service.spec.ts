import { TestBed } from '@angular/core/testing';
import { MatchsService } from './app-service.service';

describe('AppServiceService', () => {
  let service: MatchsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
