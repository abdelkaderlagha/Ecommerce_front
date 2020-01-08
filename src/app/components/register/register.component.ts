import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register/register.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;

  constructor(private formBuilder:FormBuilder,private service:RegisterService,private toastr:ToastrService,private router:Router) { 
    let registerFormControls = {
      name:new FormControl('',[
        Validators.minLength(3),
        Validators.required,
      ]),
      username:new FormControl('',[
        Validators.required,
        Validators.pattern('[a-zA-z][a-zA-z]+')
      ]),
      email:new FormControl('',[
        Validators.email,
        Validators.required,
      ]),
      password:new FormControl('',[
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('[a-zA-z0-9]+'),
      ]), 
      role:new FormControl('user',[
        Validators.required
      ])
    };
    this.registerForm=formBuilder.group(registerFormControls);
  }

  ngOnInit() {
  }

  get name(){
    return this.registerForm.get('name');
  }

  get username(){
    return this.registerForm.get('username');
  }

  get email(){
    return this.registerForm.get('email');
  }

  get password(){
    return this.registerForm.get('password');
  }

  get role(){
    return this.registerForm.get('role');
  }

  register(){
    let data = this.registerForm.value;
    data.role = [data.role];
    console.log(data);
    
    this.service.register(data).subscribe(
      res=>{
        console.log(res);
       this.toastr.success('User registred succesfully'),
        this.router.navigate(['/login']);
      },
      error=>{
       console.log(error);
        this.toastr.error(error.error);
      }
    );
  }

}
