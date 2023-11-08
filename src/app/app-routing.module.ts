import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCartComponent } from './modules/cart/my-cart/my-cart.component';
import { ProductListComponent } from './modules/product/product-list/product-list.component';

const routes: Routes = [
  {
    path:'products', //root tanımı
    component: ProductListComponent //bu root için hangi component yüklenecek
  },
  {
    path:'my-cart', //root tanımı
    component: MyCartComponent //bu root için hangi component yüklenecek
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
