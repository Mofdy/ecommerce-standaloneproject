import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl: string = `${environment.apiUrl}/products`;
  
  constructor(private httpclient: HttpClient) { }
  addProduct(product: IProduct): Observable<IProduct> {
    return this.httpclient.post<IProduct>(this.baseUrl, product);
  }
  deleteProduct(productId: number): Observable<void> {
    return this.httpclient.delete<void>(`${this.baseUrl}/${productId}`);
  }
  // getCategories(): Observable<string[]> {
  //   return this.httpclient.get<string[]>('http://localhost:3000/Categories');
  // }


}
