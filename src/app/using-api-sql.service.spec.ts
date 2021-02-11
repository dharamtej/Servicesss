import { TestBed } from '@angular/core/testing';

import { UsingApiSqlService } from './using-api-sql.service';

describe('UsingApiSqlService', () => {
  let service: UsingApiSqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsingApiSqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
