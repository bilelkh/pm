import { TestBed } from '@angular/core/testing';

import { ProdiverService } from './prodiver.service';

describe('ProdiverService', () => {
  let service: ProdiverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdiverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
