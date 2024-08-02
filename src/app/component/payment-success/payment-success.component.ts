import { Component, OnInit } from '@angular/core';
import { HeaderUserComponent } from "../header-user/header-user.component";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../services/order.service';
import { SessionStorageService } from '../../services/session-storage.service';
import { OrderState } from '../../common/order-state';

@Component({
  selector: 'app-payment-success',
  standalone: true,
  imports: [HeaderUserComponent, CommonModule, RouterModule, FormsModule],
  templateUrl: './payment-success.component.html',
  styleUrl: './payment-success.component.css'
})
export class PaymentSuccessComponent implements OnInit {
  
  constructor(private orderService:OrderService,
    private sessionStorage: SessionStorageService
  ){

  }

  ngOnInit(): void {
    console.log(this.sessionStorage.getItem('order'));
    let order = this.sessionStorage.getItem('order');

    let formmData = new FormData();

    formmData.append('id',order.id);
    formmData.append('state',OrderState.CONFIRMED.toString());

    this.orderService.updateOrder(formmData).subscribe(
      data=>{
        console.log(data)
        console.log("logoutCoponent: " + this.sessionStorage.getItem('token'))
        this.sessionStorage.removeItem('token');
        console.log("logoutCoponent deleted: " + this.sessionStorage.getItem('token'));
        
      }
    );
    
  }

}
