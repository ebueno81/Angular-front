import { Component } from '@angular/core';
import { HeaderAdminComponent } from "../../header-admin/header-admin.component";
import { Category } from '../../../common/category';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../../../services/category.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categorias-list',
  standalone: true,
  imports: [CommonModule, HeaderAdminComponent],// el CommonModule permission work with ngFor
  templateUrl: './categorias-list.component.html',
  styleUrl: './categorias-list.component.css'
})
export class CategoriasListComponent {

  categories : Category[]=[];
  
  ngOnit(): void{
    throw new Error('Method not implemented');
  }

  
  constructor(private categoryService:CategoryService, private toastr:ToastrService){
    this.listaCategories();
  }

  listaCategories(){
    this.categoryService.getListCategory().subscribe(
      data=>this.categories=data
    )
  }

}
