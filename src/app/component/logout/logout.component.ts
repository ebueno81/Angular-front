import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from '../../services/session-storage.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit {
  ngOnInit(): void {
    console.log('LogoutComponent: ' + this.sessionStorage.getItem('token'));
    this.sessionStorage.removeItem('token');
    console.log('LogoutComponent eliminado: '+ this.sessionStorage.getItem('token'));
    this.router.navigate(['/']);
  }

  constructor(private sessionStorage:SessionStorageService, private router:Router){

  }
}
