import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'http://localhost:8080/api/auth/signin';

  constructor(private http:HttpClient) { }

  login(data){
    return this.http.post<any>(this.url,data);
  }

  isLoggedIn(){
    let token = localStorage.getItem("Authorization");
    if (token) {
      return true;
    }
    return false;
  }

  isLoggedAdmin(){
    let token = localStorage.getItem("Authorization");
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    
    let roles = decodedToken.roles;
    roles = roles.replace('[','');
    roles = roles.replace(']','');
    roles = roles.split(', '); 

    for (let i =0; i < roles.length; i++){
       if (roles[i] == "ROLE_ADMIN")
      {
        return true;
      }
       
   }
   return false;
  }

  isActivated(){
    let token = localStorage.getItem("Authorization");
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    let etat = decodedToken.etat;
    return etat;
  }

}
