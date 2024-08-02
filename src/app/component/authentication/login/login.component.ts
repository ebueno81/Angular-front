import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeaderUserComponent } from '../../header-user/header-user.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../../../services/authentication.service';
import { Userdto } from '../../../common/userdto';
import { SessionStorageService } from '../../../services/session-storage.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule, HeaderUserComponent,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  
  userName: string='';
  password:string='';
  ngOnInit(): void {
    }

    constructor(private authetication: AuthenticationService, private sessionStorage: SessionStorageService,
      private router: Router
    ){

    }

    login(){
      let userDto = new Userdto(this.userName,this.password);

      this.authetication.login(userDto).subscribe(
        token =>{
          console.log(token)
          this.sessionStorage.setItem('token',token);
          if(token.type=='ADMIN'){
            this.router.navigate(['/admin/product']);
          }else{
            this.router.navigate(['/'])

          }
        } 
      );
      console.log(userDto);
    }
}
