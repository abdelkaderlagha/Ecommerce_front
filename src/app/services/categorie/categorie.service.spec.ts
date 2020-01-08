import { TestBed } from '@angular/core/testing';

import { AjouterCategorieService } from './categorie.service';

describe('AjouterCategorieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AjouterCategorieService = TestBed.get(AjouterCategorieService);
    expect(service).toBeTruthy();
  });
});
