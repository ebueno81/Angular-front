import { Component, OnInit } from '@angular/core';
import { Category } from '../../../common/category';
import { CategoryService } from '../../../services/category.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit {
    categories : Category[]=[];
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
