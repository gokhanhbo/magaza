import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Product } from './product/product';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'products', component: ProductComponent},
  {path:'', redirectTo: 'products', pathMatch:'full'},
  {path:'products/category/:categoryId', component:ProductComponent},
  {path:'product-add-1', component: ProductComponent},
  {path:'product-add-2', component: ProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
