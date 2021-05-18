import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';
import { Product } from './product';
import { SepetComponent } from '../sepet/sepet.component';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService, SepetComponent],
})

export class ProductComponent implements OnInit {
  constructor(
    private alertifyService: AlertifyService, 
    private productService:ProductService,
    private activatedRoute:ActivatedRoute,
    ) {}
  title = "Ürün Listesi"
  filterText = ""
  products: Product[];

  

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.productService.getProducts(params["categoryId"]).subscribe(data=>{
        this.products = data
      });
    })
  }

  addToCart(product) {
    this.alertifyService.success(product.name + " Sepete Eklendi.")
  }

}
