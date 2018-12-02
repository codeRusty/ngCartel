import { TestBed } from '@angular/core/testing';

import { BeamService } from './beam.service';

describe('BeamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeamService = TestBed.get(BeamService);
    expect(service).toBeTruthy();
  });
});
