import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  constructor(private formBuilder:FormBuilder, private loginService:LoginService,private router:Router,private toastr:ToastrService) { 
    let loginFormControls = {
      /*email:new FormControl('',[
        Validators.required,
        Validators.email,
      ]),*/
      username:new FormControl('',[
        Validators.required
      ]),
      password:new FormControl('',[
        Validators.required,
        Validators.minLength(6),
      ]),
    }
    this.loginForm=formBuilder.group(loginFormControls);
  }

  ngOnInit() {
  }

  get email(){
    return this.loginForm.get('email');
  }

  get password(){
    return this.loginForm.get('password');
  }


  login(){
    this.loginService.login(this.loginForm.value).subscribe(
      res=>{
        localStorage.setItem("Authorization",res.tokenType+" "+res.accessToken);
        this.router.navigate(['/home']);
      },
      error=>{
        console.log(error);
        this.toastr.error(error.error.text);
      }
    );
  }

  etat(){
    let token = localStorage.getItem("Authorization");
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    let etat = decodedToken.etat;
    return etat;
  }

}
