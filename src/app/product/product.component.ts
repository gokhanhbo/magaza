import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  title = "Ürün Listesi"
  products : any[] = [
    {id:1, name: "laptop", price:2500, categoryId:1, description: "Asus Zenbook"},
    {id:2, name: "Mouse", price:100, categoryId:2, decription: "Logitech"}
  ]

  ngOnInit(): void {
  }

}
