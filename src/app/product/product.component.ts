import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';
import { Product } from './product';
import { SepetComponent } from '../sepet/sepet.component';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService],
})

export class ProductComponent implements OnInit {
  constructor(
    private alertifyService: AlertifyService,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
  ) { }
  title = "Ürün Listesi"
  filterText = ""
  products: Product[];
  dbpath = 'http://159.89.31.194:4000/sepet';

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.productService.getProducts(params["categoryId"]).subscribe(data => {
        this.products = data
      });
    })
  }

  addToCart(product: Product): Observable<Product> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token'
      })
    }

    this.alertifyService.success(product.name + " başarı ile eklendi.")

    return this.http.post<Product>(
      this.dbpath, product, httpOptions)
      .pipe(tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );


  }
  handleError(handleError: any): import("rxjs").OperatorFunction<Product, any> {
    throw new Error('Method not implemented.');
  }

}
