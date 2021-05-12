import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MarvelService } from './marvel.service';

describe('MarvelService', () => {
  let service: MarvelService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]

    });
    service = TestBed.inject(MarvelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
