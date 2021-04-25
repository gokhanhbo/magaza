import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import {AlertifyService} from '../services/alertify.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService:AlertifyService) { }
  title = "Ürün Listesi"
  filterText = ""
  products : Product[] = [
    {id:1, name: "laptop", price:2500, categoryId:1, description: "Asus Zenbook", imageUrl:"https://productimages.hepsiburada.net/s/41/375/10688626163762.jpg"},
    {id:2, name: "Mouse", price:100, categoryId:2, description: "Logitech", imageUrl:"https://productimages.hepsiburada.net/s/41/375/10688626163762.jpg"},
    {id:2, name: "Book", price:100, categoryId:2, description: "Logitech", imageUrl:"https://productimages.hepsiburada.net/s/41/375/10688626163762.jpg"},
    {id:2, name: "Music Disk", price:100, categoryId:2, description: "Logitech", imageUrl:"https://productimages.hepsiburada.net/s/41/375/10688626163762.jpg"},
    {id:2, name: "USB Cable", price:100, categoryId:2, description: "Logitech", imageUrl:"https://productimages.hepsiburada.net/s/41/375/10688626163762.jpg"},
    {id:2, name: "Tablet", price:100, categoryId:2, description: "Logitech", imageUrl:"https://productimages.hepsiburada.net/s/41/375/10688626163762.jpg"},
    {id:2, name: "Keyboard", price:100, categoryId:2, description: "Logitech", imageUrl:"https://productimages.hepsiburada.net/s/41/375/10688626163762.jpg"}
  ]

  ngOnInit(): void {
  }

  addToCart(product){
    this.alertifyService.success(product.name + "Sepete Eklendi.")
  }

}
