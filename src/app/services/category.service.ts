import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Category } from '../category/category';
import { Observable, throwError } from 'rxjs';
import {tap,catchError} from 'rxjs/operators';

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }
  dbpath = 'http://159.89.31.194:4000/categories';

  getCategories():Observable<Category[]>{
    return this.http
      .get<Category[]>(this.dbpath).pipe(
        tap(data=>console.log(JSON.stringify(data))),
        catchError(this.handleError),
      );
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage =''
    if(err.error instanceof ErrorEvent){
      errorMessage = 'Bir hata oluştu '+err.error.message
    }
    else {
      errorMessage = 'Sistemsel bir hata'
    }
    return throwError(errorMessage);
  }
}