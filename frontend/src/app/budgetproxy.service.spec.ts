import { TestBed } from '@angular/core/testing';

import { BudgetproxyService } from './budgetproxy.service';

describe('BudgetproxyService', () => {
  let service: BudgetproxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BudgetproxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
