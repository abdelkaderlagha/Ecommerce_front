import { Categorie } from './categorie-model';

export class Produit{
    id:number;
    nom:string;
    prixAchat:number;
    prixVente:number;
    categorie:Categorie;

    constructor(){
    }
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

    get prixAchat():number{
        return this._prixAchat;
    }
    set prixAchat(prixAchat:number){
        this._prixAchat=prixAchat;
    }

    get prixVente():number{
        return this._prixVente;
    }
    set prixVente(prixVente:number){
        this._prixVente=prixVente;
    }

    get categorie():Categorie{
        return this._categorie;
    }
    set categorie(categorie:Categorie){
        this._categorie=categorie;
    }
    */
}