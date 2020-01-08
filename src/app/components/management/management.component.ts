import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/models/categorie-model';
import { Produit } from 'src/app/models/produit-model';
import { CategorieService } from 'src/app/services/categorie/categorie.service';
import { ProduitService } from 'src/app/services/produit/produit.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {

  categories: Categorie[];
  produits: Produit[];
  isAdmin:boolean;
  isPm:boolean;
  isUser:boolean;

  constructor(
    private serviceCategorie: CategorieService, 
    private serviceProduit: ProduitService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {

    this.token;
    this.reloadData(this.token);
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.token);
    let roles = decodedToken.roles;
    
    let username = decodedToken.sub;
    roles = roles.replace('[','');
    roles = roles.replace(']','');
    roles = roles.split(', '); 
    
    this.isUser=false;
    this.isAdmin=false;
    this.isPm=false;

    for (let i =0; i < roles.length; i++){
       if(roles[i] == "ROLE_USER")
        { this.isUser=true;}

        if (roles[i] == "ROLE_ADMIN")
          {this.isAdmin=true;}

          if (roles[i] == "ROLE_PM")
         { this.isPm=true;}
      
    }

  }

  get token(){
    let token = localStorage.getItem("Authorization");
    return token;
  }

  reloadData(token) {
    this.serviceCategorie.allCategorie(token).subscribe(
      (res) => this.categories = res
    );
    this.serviceProduit.allProduit(token).subscribe(
      (res) => this.produits = res
    );
  }

  deleteProduit(produit: Produit) {
    const index = this.produits.indexOf(produit);
    this.produits.splice(index, 1);
    this.serviceProduit.deleteProduit(produit.id,this.token).subscribe(
      data => {
        console.log(data);
        this.toastr.success(produit.nom+' est supprimé!');

      }
      , 
      error =>{
        console.log(error);
        this.toastr.error("Erreur lors de la suppression");
      }
    );
    setTimeout(()=>200);
  }

  deleteCategorie(categorie: Categorie) {
    const index = this.categories.indexOf(categorie);
    this.categories.splice(index, 1);

    this.serviceCategorie.deleteCategorie(categorie.id,this.token).subscribe(
      data => {
        console.log(data);
        this.toastr.success('La catégorie est supprimé!');
      },
      error =>{
        console.log(error);
        this.toastr.error("Erreur lors de la suppression");
      }
    );
    setTimeout(()=>200);
  }
  
}
