import { TestBed } from '@angular/core/testing';

import { ComicsShopFormService } from './comicsshop-form.service';

describe('ComicsShopFormService', () => {
  let service: ComicsShopFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComicsShopFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
