import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private url="http://localhost:8080/rest/api/";

  constructor(private http:HttpClient) { }

  allCategorie(token){
    var heards_options = new HttpHeaders().set("Authorization",token);
    const httpOptions = {
      headers : heards_options
    }
    return this.http.get<any>(this.url+"allCategorie",httpOptions);
  }

  addCategorie(categorie:Object,token){
    var heards_options = new HttpHeaders().set("Authorization",token);
    const httpOptions = {
      headers : heards_options
    }
    return this.http.post<any>(this.url+"addCategorie",categorie,httpOptions);
  }

  getCategorie(id:number,token){
    var heards_options = new HttpHeaders().set("Authorization",token);
    const httpOptions = {
      headers : heards_options
    }
    return this.http.get<any>(this.url+"categorie/"+id,httpOptions);
  }

  updateCategorie(id:number,categorie:Object,token){
    var heards_options = new HttpHeaders().set("Authorization",token);
    const httpOptions = {
      headers : heards_options
    }
    return this.http.put<any>(this.url+"categorie/"+id,categorie,httpOptions);
  }

  deleteCategorie(id:number,token){
    var heards_options = new HttpHeaders().set("Authorization",token);
    const httpOptions = {
      headers : heards_options
    }
    return this.http.delete<any>(this.url+"categorie/"+id,httpOptions);
  }

}
