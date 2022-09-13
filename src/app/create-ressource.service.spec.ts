import { TestBed } from '@angular/core/testing';

import { CreateRessourceService } from './create-ressource.service';

describe('CreateRessourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateRessourceService = TestBed.get(CreateRessourceService);
    expect(service).toBeTruthy();
  });
});
