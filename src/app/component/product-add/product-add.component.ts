import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { HeaderAdminComponent } from "../header-admin/header-admin.component";
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { ActivatedRoute, Route, Router } from '@angular/router';
import { not } from 'rxjs/internal/util/not';
import { ToastrService } from 'ngx-toastr';
import { Category } from '../../common/category';
import { CategoryService } from '../../services/category.service';
import { CommonModule } from '@angular/common';
import { SessionStorageService } from '../../services/session-storage.service';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [CommonModule, HeaderAdminComponent, FormsModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent implements OnInit {
  
  id : number =0;
  code : string='0001';
  name : string='';
  description : string = '';
  price : number = 0;
  urlImage : string ='';
  userId : string ='1';
  categoryId: string = '1'; 
  selectedFile!: File;
  user:number=0;
  categories : Category[] = [];

constructor(private productService : ProductService, private categoryService: CategoryService, private router:Router, private activateRoute:ActivatedRoute, 
  private toastr: ToastrService, private sessionStorage : SessionStorageService){

}

  ngOnInit(): void {
    this.getCategories();
    this.getProductById();
    this.user=this.sessionStorage.getItem('token').id;
    this.userId=this.user.toString();
  }

  
  addProduct(){
    let producto = {
      id: this.id,
      code: '0001',
      name:this.name,
   }
    const formData = new FormData();
    formData.append('id',this.id.toString());
    formData.append('code','0001');
    formData.append('name',this.name);
    formData.append('description',this.description);
    formData.append('price',this.price.toString());
    formData.append('urlImage',this.urlImage);
    formData.append('userId',this.userId);
    formData.append('categoryId',this.categoryId);
    formData.append('image',this.selectedFile);
    console.log(formData);

    this.productService.createProduct(formData).subscribe(
      data => {
        console.log(data);
        if(this.id==0){
          this.toastr.success('Product register success','Products');
        }else{
          this.toastr.success('Product update success','Products');
        }
        
        this.router.navigate(['admin/product']);
      }
    );
  }

  getProductById(){
      this.activateRoute.params.subscribe(
        prod => {
          let id = prod["id"];
          if (id){
              console.log('El valor de la variable ' + id );
              this.productService.getProductById(id).subscribe(
                data => {
                  this.id=data.id;
                  this.code=data.code;
                  this.name=data.name;
                  this.description=data.description;
                  this.price=data.price;
                  this.urlImage=data.urlImage;
                  this.userId=data.userId;
                  this.categoryId=data.categoryId;
                  
                }
              );
          }
        }
      );
  }

  onFileSelect(event:any){
    this.selectedFile = event.target.files[0];
  }

  getCategories(){
    return this.categoryService.getListCategory().subscribe(
      data=>this.categories = data
    );
  }
}
