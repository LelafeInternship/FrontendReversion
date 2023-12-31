import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:5148/api/Product'; // Replace with your backend API URL
  private selectedProductId: number=0;
private postwishlisturl='http://localhost:5148/api/WishList';
  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }
  setSelectedProductId(productId: number) {
    this.selectedProductId = productId;
  }

  getSelectedProductId() {
    return this.selectedProductId;
  }
  WishlistAdded(productData: any): Observable<any> {
    return this.http.post(this.postwishlisturl, productData);
  }
 
}
