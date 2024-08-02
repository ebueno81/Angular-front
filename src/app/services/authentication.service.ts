import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../common/user';
import { Observable } from 'rxjs';
import { Userdto } from '../common/userdto';
import { Jwtclient } from '../common/jwtclient';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl : string="http://localhost:8085/api/v1/security";

  constructor(private httpClient: HttpClient) {

   }

   registerUser(user:User): Observable<User>{
      return this.httpClient.post<User>(this.apiUrl+'/register',User);
   }

   login(userDTO:Userdto):Observable<Jwtclient>{
    return this.httpClient.post<Jwtclient>(this.apiUrl+"/",userDTO);
   }
}
