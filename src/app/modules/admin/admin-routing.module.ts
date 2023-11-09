import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { ProductSaveComponent } from './product-save/product-save.component';

const routes: Routes = [
  {
    path:'',
    component:AdminLayoutComponent,
    children:[
      {
        path:'',
        component:ProductComponent
      },
      {
        path:'product',
        component:ProductComponent
      },
      {
        path:'product-save',
        component:ProductSaveComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
