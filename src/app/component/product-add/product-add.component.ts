import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { HeaderAdminComponent } from "../header-admin/header-admin.component";
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [HeaderAdminComponent, FormsModule],
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

constructor(private productService : ProductService, private router:Router, private activateRoute:ActivatedRoute){

}

  ngOnInit(): void {
    this.getProductById();
  }

  addProduct(){
    const formData = new FormData();
    formData.append('id',this.id.toString());
    formData.append('code','0001');
    formData.append('name',this.name);
    formData.append('description',this.description);
    formData.append('price',this.price.toString());
    formData.append('urlImage',this.urlImage);
    formData.append('userId',this.userId);
    formData.append('categoryId',this.categoryId);
    console.log(formData);

    this.productService.createProduct(formData).subscribe(
      data => {
        console.log(data);
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

}
