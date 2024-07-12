import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../common/product';
import { ProductService } from '../../services/product.service';
import { HeaderAdminComponent } from "../header-admin/header-admin.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, HeaderAdminComponent], // Importa CommonModule
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  products : Product[] = [];

  constructor(private productService: ProductService){

  }
  ngOnInit(): void {
    this.listProducts();
  }

  listProducts(){
    this.productService.getProducts().subscribe(
      data=>{this.products = data
      // console.log(data);
  });
  }

}
