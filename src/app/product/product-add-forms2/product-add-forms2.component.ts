import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/category/category';
import { CategoryService } from 'src/app/services/category.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-add-forms2',
  templateUrl: './product-add-forms2.component.html',
  styleUrls: ['./product-add-forms2.component.css'],
  providers: [CategoryService],
})
export class ProductAddForms2Component implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
  ) { }

  productAddForm: FormGroup;
  product:Product = new Product();
  categories: Category[];

  createProductAddFrom() {
    this.productAddForm = this.formBuilder.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      imageUrl: ["", Validators.required],
      price: ["", Validators.required],
      categoryId: ["", Validators.required]
    });
  }

  ngOnInit(): void {
    this.createProductAddFrom();
    this.categoryService.getCategories().subscribe(data=>{
      this.categories = data
    })
  }

  add() {
    if (this.productAddForm.valid) {
      this.product = Object.assign({}, this.productAddForm.value)
    }
  }

}
