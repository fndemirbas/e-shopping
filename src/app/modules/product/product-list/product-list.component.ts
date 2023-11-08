import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private productService:ProductService, private route:ActivatedRoute){
  }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      let categoryId = params['categoryId'];
      this.getProducts(categoryId);
    })
  }

  getProducts(categoryId:any) {
    if(categoryId){
      this.productService.getProductsByProductId(categoryId).subscribe( data=>{this.products=data;});
    }
    else{
      this.productService.getProducts().subscribe( data=>{this.products=data;});
    }
  }

  addToCart(product:Product){
    alert(`${product.name} ürün sepete eklendi.`);
  }

}
