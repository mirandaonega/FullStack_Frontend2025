import { TestBed } from '@angular/core/testing';

import { ListadoEntradasService } from './listado-entradas.service';

describe('ListadoEntradasService', () => {
  let service: ListadoEntradasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListadoEntradasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
