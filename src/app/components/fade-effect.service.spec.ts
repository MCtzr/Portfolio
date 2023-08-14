import { TestBed } from '@angular/core/testing';

import { FadeEffectService } from './fade-effect.service';

describe('FadeEffectService', () => {
  let service: FadeEffectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FadeEffectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
