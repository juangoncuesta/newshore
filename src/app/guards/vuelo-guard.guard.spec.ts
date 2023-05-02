import { TestBed } from '@angular/core/testing';

import { VueloGuardGuard } from './vuelo-guard.guard';

describe('VueloGuardGuard', () => {
  let guard: VueloGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VueloGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
