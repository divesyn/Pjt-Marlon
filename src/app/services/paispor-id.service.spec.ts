import { TestBed } from '@angular/core/testing';

import { PaisporIdService } from './paispor-id.service';

describe('PaisporIdService', () => {
  let service: PaisporIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaisporIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
