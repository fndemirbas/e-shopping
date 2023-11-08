import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryService } from 'src/app/services/category.service';



@NgModule({
  declarations: [
    CategoryListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CategoryListComponent
  ],
/*  providers:[
    CategoryService
  ]*/
})
export class CategoryModule { }
