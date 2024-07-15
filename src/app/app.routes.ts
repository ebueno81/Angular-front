import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductAddComponent } from './component/product-add/product-add.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'admin/product',component:ProductListComponent},
    {path:'admin/product/addproduct',component:ProductAddComponent},
    {path:'admin/product/update/:id',component:ProductAddComponent}
    
];
