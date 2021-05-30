import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';
import { Product } from './product';
import { NgForm } from '@angular/forms';
import { SepetComponent } from '../sepet/sepet.component';
import { Category } from 'src/app/category/category';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { CategoryService } from '../services/category.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [CategoryService, ProductService],
})

export class ProductComponent implements OnInit {
  constructor(
    private alertifyService: AlertifyService,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private categoryService:CategoryService, 
    private http: HttpClient,
  ) { }
  title = "Ürün Listesi"
  filterText = ""
  products: Product[];
  model : Product = new Product();
  categories: Category[];
  dbpath = 'http://159.89.31.194:4000/sepet';

  ngOnInit() {
    this.categoryService.getCategories().subscribe(data=>{
      this.categories = data
    });
  }

  add(form:NgForm){
    this.productService.addProduct(this.model).subscribe(data=>{
      this.alertifyService.success(data.name + " başarı ile eklendi.")
    });
  }

}
