import { Component } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';
import { HomeComponent } from "./component/home/home.component";
import { ProductListComponent } from "./component/product-list/product-list.component";
import { ProductAddComponent } from "./component/product-add/product-add.component";
import { provideToastr } from 'ngx-toastr';
import { CategoriasListComponent } from './component/category/categorias-list/categorias-list.component';
import { CategoriasComponent } from './component/category/categorias/categorias.component';

const routes: Routes = [
  {path:'',component:HomeComponent}
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, ProductListComponent, ProductAddComponent, CategoriasListComponent, CategoriasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
