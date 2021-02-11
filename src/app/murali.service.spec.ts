import { TestBed } from '@angular/core/testing';

import { MuraliService } from './murali.service';

describe('MuraliService', () => {
  let service: MuraliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MuraliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
