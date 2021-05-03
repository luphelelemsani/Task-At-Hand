import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  url: string = 'http://localhost:3000/Products';

  constructor(private http: HttpClient) {}
  fetchProducts() {
    return this.http.get<Products[]>(this.url);
  }
}
