import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/models/categorie-model';
import { CategorieService } from 'src/app/services/categorie/categorie.service';
import { Router } from '@angular/router';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ajouter-categorie',
  templateUrl: './ajouter-categorie.component.html',
  styleUrls: ['./ajouter-categorie.component.css']
})
export class AjouterCategorieComponent implements OnInit {

  addCategorieLogin:FormGroup;
  categorie:Categorie=new Categorie();
  submitted=false;

  constructor(
    private service:CategorieService, 
    private router:Router,
    private formBuilder:FormBuilder,
    private toastr:ToastrService
    ) {}

  ngOnInit() {
    
  }

  ajouter(){
    let token = localStorage.getItem("Authorization");
    this.service.addCategorie(this.categorie,token).subscribe(
      data => {
        console.log(data);
        this.toastr.success("La catégorie est ajoutée!");
      }
      , 
      error => {
        console.log(error);
        this.toastr.error("Erreur");
      }
      );
    this.categorie=new Categorie();
    setTimeout(()=>{
      this.router.navigate(['/management']);
    },200)
    
  }

  onSubmit(){
    this.submitted=true;
    this.ajouter();
  }

}
