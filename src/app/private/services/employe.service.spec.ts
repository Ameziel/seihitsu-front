import { TestBed } from '@angular/core/testing';

import { EmployeService } from './employe.service';

describe('EmployeserviceService', () => {
  let service: EmployeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
