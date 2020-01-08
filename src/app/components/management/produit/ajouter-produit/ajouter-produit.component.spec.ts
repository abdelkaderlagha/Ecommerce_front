import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterProduitComponent } from './ajouter-produit.component';

describe('AjouterProduitComponent', () => {
  let component: AjouterProduitComponent;
  let fixture: ComponentFixture<AjouterProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterProduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
