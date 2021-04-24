import { Component, OnInit } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }
  title="Kategori Listesi"
  categories : Category[] = [
    {id:1, name:"Elektronik"},
    {id:2, name:"Cep Telefonu"},
    {id:3, name:"Müzik"},
    {id:4, name:"Kitap"},
    {id:5, name:"Süpermarket"}
  ]

  ngOnInit(): void {
  }

}
