import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';
import { Observable, delay, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class CategoryService {

  constructor(private httpClient:HttpClient) { 
    console.warn("Category Service constructor çalıştı.")
   }

  getTime():number{
    return new Date().getMilliseconds();
  }

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${environment.baseApiUrl}/categories`).pipe(tap(data=>console.log(data)));

  }
}
