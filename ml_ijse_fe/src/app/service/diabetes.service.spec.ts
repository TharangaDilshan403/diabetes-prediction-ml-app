import { TestBed } from '@angular/core/testing';

import { DiabetesService } from '../diabetes.service';

describe('DiabetesService', () => {
  let service: DiabetesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiabetesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
