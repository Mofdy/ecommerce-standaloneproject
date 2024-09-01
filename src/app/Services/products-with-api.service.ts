import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ProductsWithApiService {
  baseUrl: string = `${environment.apiUrl}/products`;

  constructor(private httpclient: HttpClient) { }

  getAllProducts(): Observable<IProduct[]> {
    return this.httpclient.get<IProduct[]>(this.baseUrl)
  }
  
  getProductByID(prdid: number): Observable<IProduct> {
    return this.httpclient.get<IProduct>(`${this.baseUrl}/${prdid}`)
  }

  searchPrdWithCategoryID(catid: number): Observable<IProduct[]> {
    return this.httpclient.get<IProduct[]>(`${this.baseUrl}?categoryID=${catid}`)
  }
  getProductIds(): Observable<number[]> {
    return this.httpclient.get<IProduct[]>(this.baseUrl).pipe(
      map(products => products.map(product => product.id))
    );
  }
}