import { TestBed } from '@angular/core/testing';

import { PromptcheckService } from './promptcheck.service';

describe('PromptcheckService', () => {
  let service: PromptcheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromptcheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
