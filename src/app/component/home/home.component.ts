import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../common/product';
import { ProductService } from '../../services/product.service';
import { Router, RouterModule } from '@angular/router';
import { HeaderUserComponent } from "../header-user/header-user.component";


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

  constructor(private productService:ProductService){

  }
  
  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      data => this.products = data
    );
  }
  

}
