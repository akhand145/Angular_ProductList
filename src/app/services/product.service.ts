import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiurl = 'http://localhost:3000/products'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiurl)
  } 

  create(data: any): Observable<Product[]> {
    return this.http.post<Product[]>(this.apiurl, data)
  }

  get(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiurl}/${id}`)
  }

  update(id: number, data: any): Observable<Product> {
    return this.http.put<Product>(`${this.apiurl}/${id}`, data)
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiurl}/${id}`)
  }

}
