import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product/product';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }
  dbpath = 'http://159.89.31.194:4000/products';

  getProducts():Observable<Product[]>{
    return this.http
      .get<Product[]>(this.dbpath);
  }
}
