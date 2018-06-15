import { TestBed, inject } from '@angular/core/testing';

import { MysharedlibService } from './mysharedlib.service';

describe('MysharedlibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MysharedlibService]
    });
  });

  it('should be created', inject([MysharedlibService], (service: MysharedlibService) => {
    expect(service).toBeTruthy();
  }));
});
