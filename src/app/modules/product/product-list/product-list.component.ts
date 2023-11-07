import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: [
  ]
})
export class ProductListComponent implements OnInit {

  products:Product[] =[];

  ngOnInit(): void {
    console.log('Products list yüklendi.');
    this.getProducts();
  }

  getProducts() {
    this.products = [
      {
        id:1,
        name:'Tekli Koltuk',
        unitPrice:10,
        description:'Beyaz kadife kumaş ile döşenmiştir.',
        categoryId:2
      },
      {
        id:2,
        name:'İkili Koltuk',
        unitPrice:100,
        description:'Yatıya misafiriniz mi geldi? Yatıracak yeriniz mi yok? İşte aradığınız, açılabilir yatak olan koltuk ayağınıza geldi.',
        categoryId:2
      },
      {
        id:4,
        name:'Makarna',
        unitPrice:10,
        description:'Düdük Makarna',
        categoryId:1
      },
      {
        id:5,
        name:'Makarna',
        unitPrice:5.509,
        description:'Uzun Makarna',
        categoryId:1
      },
      {
        id:6,
        name:'Tesla',
        unitPrice:2000000,
        description:'by Elon Musk',
        categoryId:1
      },
      {
        id:7,
        name:'Togg',
        unitPrice:1000000,
        description:'Elektrikli',
        categoryId:1
      }
    ];
  }

  addToCart(product:Product){
    alert(`${product.name} ürün sepete eklendi.`);
  }

}
