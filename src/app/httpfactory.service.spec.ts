import { TestBed, inject } from '@angular/core/testing';

import { HttpfactoryService } from './httpfactory.service';

describe('HttpfactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpfactoryService]
    });
  });

  it('should be created', inject([HttpfactoryService], (service: HttpfactoryService) => {
    expect(service).toBeTruthy();
  }));
});
