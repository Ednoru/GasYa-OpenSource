import { TestBed } from '@angular/core/testing';

import { GrifosPromosService } from './grifos-promos.service';

describe('GrifosPromosService', () => {
  let service: GrifosPromosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrifosPromosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
