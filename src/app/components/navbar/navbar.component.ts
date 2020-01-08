import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {



  constructor(private router:Router,private loginService:LoginService) { }

  ngOnInit() {


   }

  isLogged(){
    return this.loginService.isLoggedIn();
  }

  isAdmin(){
    return this.loginService.isLoggedAdmin()
  }

  logout(){
    localStorage.removeItem("Authorization");
    this.router.navigate(['/login']);
  }

  isActivated(){
    return this.loginService.isActivated();
  }

}
