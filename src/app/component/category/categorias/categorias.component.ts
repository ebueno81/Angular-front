import { Component, OnInit } from '@angular/core';
import { HeaderAdminComponent } from "../../header-admin/header-admin.component";
import { CategoryService } from '../../../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { Category } from '../../../common/category';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [HeaderAdminComponent, FormsModule],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent implements OnInit{
  id:number=0;
  name:string="";

  constructor(private categoryService:CategoryService, private router:Router, private activeRoute:ActivatedRoute,
    private toastr:ToastrService){

  }
  ngOnInit(): void {
    this.getCategoryById();
  }

  getCategoryById(){
    this.activeRoute.params.subscribe(
      cat => {
        let id = cat["id"];
        if(id){
          this.categoryService.getCategoryById(id).subscribe(
            data =>{
              this.id=data.id;
              this.name=data.name;
            }  
          );
        } 
      }
    );
  }
  addCategory(){
   let categories = new Category(this.id, this.name);
    
   
   this.categoryService.createCategory(categories).subscribe(
    res =>{
      if(this.id==0){
        this.toastr.success('Category register success','Category');
      }else{
        this.toastr.success('Category update success','Category');
      }

      this.router.navigate(['admin/categoriaslist']);
    }
   );
  }
}
