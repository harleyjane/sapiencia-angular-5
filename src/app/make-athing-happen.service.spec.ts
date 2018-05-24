import { TestBed, inject } from '@angular/core/testing';

import { MakeAthingHappenService } from './make-athing-happen.service';

describe('MakeAthingHappenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MakeAthingHappenService]
    });
  });

  it('should be created', inject([MakeAthingHappenService], (service: MakeAthingHappenService) => {
    expect(service).toBeTruthy();
  }));
});

