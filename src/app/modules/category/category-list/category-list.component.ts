import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styles: [
  ]
})
export class CategoryListComponent implements OnInit{

  categories:Category[] = [];

  ngOnInit(): void {
    console.log('Category list yüklendi.');
    this.getCategories();
  }

  getCategories(){
    this.categories = [
      {
        id:1,
        name:'Gıda'
      },
      {
        id:2,
        name:'Mobilya'
      },
      {
        id:3,
        name:'Otomotiv'
      }
    ];
  
  }

}
