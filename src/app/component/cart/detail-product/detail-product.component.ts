import { Component, OnInit } from '@angular/core';
import { HeaderAdminComponent } from "../../header-admin/header-admin.component";
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderUserComponent } from "../../header-user/header-user.component";
import { ItemCart } from '../../../common/item-cart';
import { ToastrService } from 'ngx-toastr';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-detail-product',
  standalone: true,
  imports: [CommonModule, HeaderAdminComponent, FormsModule, HeaderUserComponent],
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.css',
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class DetailProductComponent implements OnInit {

  id:number=0;
  name: string="";
  description: string="";
  urlImage:string="";
  price : number=0;
  quantity:number=0;

  ngOnInit(): void {
      this.getProductById();
  }

  constructor(private productService:ProductService, private activatedRoute:ActivatedRoute,
    private cartService: CartService, private toastr:ToastrService){


  }

  getProductById(){
    this.activatedRoute.params.subscribe(
      p=>{
        let id = p['id'];
        if(id){
          this.productService.getProductById(id).subscribe(
              data=>{
                this.id=data.id;
                this.name=data.name;
                this.description=data.description;
                this.urlImage=data.urlImage;
                this.price=data.price;
              }
          );
        }
      }
    );
  }

  addCart(id:number){
    console.log('id product:', id);
    console.log('name product:', this.name);
    console.log('quantity product:', this.price);
    
    let item = new ItemCart(id,this.name,this.quantity,this.price);

    this.cartService.addItemCart(item);

    this.toastr.success('Product add to car buys','Buy Cars');
  }
}
