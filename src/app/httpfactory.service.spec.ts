import { TestBed, inject } from '@angular/core/testing';

import { HTTPFactoryService } from './httpfactory.service';

describe('HTTPFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HTTPFactoryService]
    });
  });

  it('should be created', inject([HTTPFactoryService], (service: HTTPFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
