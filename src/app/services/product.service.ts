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

  
  getProduct(productId:number): Observable<Product> {
    return this.httpClient.get<Product>(`${environment.baseApiUrl}/products/${productId}`);
  }

  createProduct(product:Product): Observable<any>{
    return this.httpClient.post<any>(`${environment.baseApiUrl}/products`, product);
  }

  updateProduct(product:Product): Observable<any>{
    return this.httpClient.put<any>(`${environment.baseApiUrl}/products/${product.id}`, product);
  }

  deleteProduct(productId:number): Observable<any>{
    return this.httpClient.delete<any>(`${environment.baseApiUrl}/products/${productId}`);
  }
}
