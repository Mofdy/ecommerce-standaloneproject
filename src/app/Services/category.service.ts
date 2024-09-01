import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategory } from '../Models/i-category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl: string = `${environment.apiUrl}/Categories`;

  constructor(private httpclient: HttpClient) { }
  getAllCategories(): Observable<ICategory[]> {
    return this.httpclient.get<ICategory[]>(this.baseUrl);
  }
}
