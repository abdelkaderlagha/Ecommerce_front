import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users=[];

  constructor(
    private userService:UserService,
    private toastr:ToastrService,
    private router:Router,
    ) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers(){
    let token = localStorage.getItem("Authorization");
    this.userService.getAll(token).subscribe(
      res=>this.users=res,
      error=>console.log(error)
    );
  }

  delete(id,user){
    let index = this.users.indexOf(user);
    this.users.splice(index,1);
    
    let token = localStorage.getItem("Authorization");
    this.userService.delete(id,token).subscribe(
      res=>{
        this.toastr.success('User deleted!')
      },
      error=>this.toastr.error('Error!')
    );
  }

  status(id){
    let token = localStorage.getItem("Authorization");
    this.userService.status(id,token).subscribe(
      res=>{
        this.toastr.success('Status changed')    
      this.loadUsers();
    },
      error=>{
        this.toastr.error('Error!'),
        console.log(error)
      }
    )
    setTimeout(() => {
      this.router.navigate(['/gerer-users'])
    }, 200);
  }

}
