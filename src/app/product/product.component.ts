import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService: AlertifyService, private http: HttpClient) { }
  title = "Ürün Listesi"
  filterText = ""
  products: Product[];

  ngOnInit(): void {
    this.http.get<Product[]>('http://159.89.31.194:4000/products').subscribe(data => {
      this.products = data
    });
  }

  addToCart(product) {
    this.alertifyService.success(product.name + " Sepete Eklendi.")
  }

}
