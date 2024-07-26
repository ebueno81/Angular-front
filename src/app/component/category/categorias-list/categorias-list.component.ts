import { Component, inject } from '@angular/core';
import { HeaderAdminComponent } from "../../header-admin/header-admin.component";
import { Category } from '../../../common/category';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../../../services/category.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-categorias-list',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderAdminComponent],// el CommonModule permission work with ngFor
  templateUrl: './categorias-list.component.html',
  styleUrl: './categorias-list.component.css'
})
export class CategoriasListComponent {

  categories : Category[]=[];
  private router = inject(Router);

  ngOnInit(): void{
    throw new Error('Method not implemented');
  }

  
  constructor(private categoryService:CategoryService, private toastr:ToastrService){
    this.listCategories();
  }

  listCategories(){
    this.categoryService.getListCategory().subscribe(
      data=>this.categories=data
    )
  }

 

  deleteCategoryById(id:number){
    Swal.fire({
      title:"Are you sure?",
      text:"You won't be able to revert this!",
      icon:"warning",
      showCancelButton:true,
      confirmButtonColor:"#3085d6",
      confirmButtonText:"Yes, delete it!",
      cancelButtonText:"Cancel",
    }).then((result)=>{
      if(result.isConfirmed){
        this.categoryService.deleteCategoryById(id).subscribe(
          ()=>this.listCategories()
        );
        Swal.fire({
          title:"Delete!",
          text:"Your file has been deleted.",
          icon:"warning"
        });
      }
    });
  }

}
