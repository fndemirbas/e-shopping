import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: [],
//  providers: [CategoryService]
})
export class ProductListComponent implements OnInit {

  products:Product[] =[];

  constructor(private productService:ProductService){
    this.productService
  }

  ngOnInit(): void {
    console.log('Prodoct list yüklendi.', this.productService.getTime());
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe( data=>{this.products=data;});
  }

  addToCart(product:Product){
    alert(`${product.name} ürün sepete eklendi.`);
  }

}
