import { TestBed } from '@angular/core/testing';

import { GestionLibrosService } from './gestion-libros.service';

describe('GestionLibrosService', () => {
  let service: GestionLibrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionLibrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
