import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from '../../common/category';
import { CategoryService } from '../../services/category.service';
import { ToastrService } from 'ngx-toastr';
import { HeaderAdminComponent } from "../header-admin/header-admin.component";
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderAdminComponent], // Importa CommonModule
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit {
    categories : Category[]=[];

    private router = inject(Router);

    navigateToAddProduct() {
      this.router.navigate(['/admin/category']);
    }
ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
    constructor(private categoryService:CategoryService, private toastr:ToastrService){
      this.listCategories();
    }

    listCategories(){
      this.categoryService.getListCategory().subscribe(
        data=>this.categories=data
      )
    }
  
}
