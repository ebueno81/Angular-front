import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../common/product';
import { ProductService } from '../../services/product.service';
import { HeaderAdminComponent } from "../header-admin/header-admin.component";
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderAdminComponent], // Importa CommonModule
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  products : Product[] = [];

  private router = inject(Router);

  navigateToAddProduct() {
    this.router.navigate(['/admin/product/addproduct']);
  }
  showAlert() {
    alert('Router link clicked!');
  }
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

  deleteProductById(id:number){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText:"Cancel"
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.deleteProductById(id).subscribe(
          ()=>this.listProducts()
        );
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });

    
  }
  
}
