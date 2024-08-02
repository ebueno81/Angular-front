import { Component, OnInit } from '@angular/core';
import { HeaderUserComponent } from '../../header-user/header-user.component';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../../../services/authentication.service';
import { User } from '../../../common/user';
import { UserType } from '../../../common/user-type';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule,FormsModule, HeaderUserComponent,RouterModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit {
  username:string='';
  name:string='';
  surname:string='';
  email:string='';
  cellphone:string='';
  address:string='';
  password:string='';
  userType:string='';
  
  ngOnInit(): void {
    
  }

  constructor(private authentication: AuthenticationService, private router: Router, private toastr:ToastrService){}

  register(){
    this.username=this.email;
    this.userType=UserType.USER;
    let user = new User(0,this.username,this.name,this.surname,this.email,this.address,this.cellphone,this.password,this.userType);

    this.authentication.registerUser(user).subscribe(
      res => {this.toastr.success('User registred','User successfully');
      console.log(res)}
    );
    console.log(user);
    this.router.navigate(['user/login']);
  }
}
