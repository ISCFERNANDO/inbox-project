import { TestBed } from '@angular/core/testing';

import { TableInboxService } from './table-inbox.service';

describe('TableInboxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TableInboxService = TestBed.get(TableInboxService);
    expect(service).toBeTruthy();
  });
});
