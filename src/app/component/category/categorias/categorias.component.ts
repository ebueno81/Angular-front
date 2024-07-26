import { Component, OnInit } from '@angular/core';
import { HeaderAdminComponent } from "../../header-admin/header-admin.component";
import { CategoryService } from '../../../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

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
    throw new Error('Method not implemented.');
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
   let category = {
    id: this.id,
    name: this.name
   }   
   const formData = new FormData();
   formData.append('id',this.id.toString());
   formData.append('name',this.name);
   this.categoryService.createCategory(formData).subscribe(
    data =>{
      if(this.id==0){
        this.toastr.success('Category register success','Category');
      }else{
        this.toastr.success('Category update success','Category');
      }

      this.router.navigate(['admin/category']);
    }
   );
  }
}
