import { TestBed } from '@angular/core/testing';

import { EncodeHttpInterceptor } from './encode-http.interceptor';

describe('EncodeHttpInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      EncodeHttpInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: EncodeHttpInterceptor = TestBed.inject(EncodeHttpInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
