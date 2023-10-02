import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  private apiUrl = 'http://localhost:5148/api/WishList'; // YOUR API URL

  constructor(private http: HttpClient) {}

  getWishlistItems(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/GetWishListDetails/${userId}`);
  }

  deleteData(id: number): Observable<any> {
    console.log("service te che remove watan");
    return this.http.delete<any>(`http://localhost:5148/api/WishList/DeleteWishListItem?id=${id}`);
  }

  updateWishlistItem(wishlistId: number, details: any): Observable<any> {
    const updateUrl = `http://localhost:5148/api/WishList/UpdateWishListItem/${wishlistId}`;
    console.log("youir tee chui wtan service manz");
    console.log(details);
    return this.http.put(updateUrl, details);
  }
}
