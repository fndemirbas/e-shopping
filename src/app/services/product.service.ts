import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, tap } from 'rxjs';
import { Product } from '../models/product';

@Injectable(
  {
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
    return this.httpClient.get<Product[]>("http://localhost:3000/products").pipe(tap(data=>console.log(data)));
  }
}
