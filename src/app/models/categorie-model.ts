import { Produit } from './produit-model';

export class Categorie{
    id:number;
    nom:string;
    produits:Produit[];

    constructor(){}
    /*
    get id():number{
        return this._id;
    }

    get nom():string{
        return this._nom;
    }
    set nom(nom:string){
        this._nom=nom;
    }
    */
}