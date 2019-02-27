import { TestBed } from '@angular/core/testing';

import { CustomerDetailResolverService } from './customer-detail-resolver.service';

describe('CustomerDetailResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerDetailResolverService = TestBed.get(CustomerDetailResolverService);
    expect(service).toBeTruthy();
  });
});
