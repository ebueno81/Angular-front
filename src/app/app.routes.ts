import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductAddComponent } from './component/product-add/product-add.component';
import { CategoriasComponent } from './component/category/categorias/categorias.component';
import { CategoriasListComponent } from './component/category/categorias-list/categorias-list.component';
import { DetailProductComponent } from './component/cart/detail-product/detail-product.component';
import { SumaryOrderComponent } from './component/orders/sumary-order/sumary-order.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'admin/product',component:ProductListComponent},
    {path:'admin/product/addproduct',component:ProductAddComponent},
    {path:'admin/product/update/:id',component:ProductAddComponent},
    {path:'admin/categoriaslist',component:CategoriasListComponent},
    {path:'admin/category/addcategory',component:CategoriasComponent},
    {path:'admin/category/update/:id',component:CategoriasComponent},
    {path:'cart/detailproduct/:id',component:DetailProductComponent},
    {path:'cart/sumary',component:SumaryOrderComponent},
    
    
    
    
];
