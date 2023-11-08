import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, tap } from 'rxjs';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment';

@Injectable(
  {
    //kök modülde(app.module.ts) belirtmişssin gibi
    providedIn: 'root'
  }
)
export class ProductService {

  constructor(private httpClient:HttpClient) { 
    console.warn("Product Service constructor çalıştı.")
   }

  getTime():number{
    return new Date().getMilliseconds();
  }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${environment.baseApiUrl}/products`).pipe(tap(data=>console.log(data)));
  }
  
  getProductsByProductId(categoryId:any){
    return this.httpClient.get<Product[]>(`${environment.baseApiUrl}/products?categoryId=${categoryId}`);
  }

}
