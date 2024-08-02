import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../common/product';
import { Router, RouterModule } from '@angular/router';
import { HeaderUserComponent } from "../header-user/header-user.component";
import { HomeService } from '../../services/home.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderUserComponent], // Importa CommonModule
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  private router = inject(Router);

  constructor(private homeService:HomeService){

  }
  
  ngOnInit(): void {
    this.homeService.getProducts().subscribe(
      data => this.products = data
    );
  }
  

}
