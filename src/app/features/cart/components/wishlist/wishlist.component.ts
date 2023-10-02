import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/features/cart/services/wishlist.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  wishlistItems: any[] = []; // Initialize wishlistItems as an empty array
  currentAmount = 0;

  constructor(private wishlistService: WishlistService) {}

  ngOnInit(): void {
    this.loadWishlistItems();
  }

  loadWishlistItems(): void {
    const userId = 1; // Replace with the actual user ID or fetch it dynamically
    this.wishlistService.getWishlistItems(userId).subscribe(
      (data) => {
        // Ensure that 'data' is an object
        if (typeof data === 'object') {
          // Flatten the object into an array
          this.wishlistItems = Object.values(data).flat();
          console.log(this.wishlistItems);
        } else {
          console.error('Wishlist data is not an object:', data);
        }
      },
      (error) => {
        console.error('Error fetching wishlist items:', error);
      }
    );
  }

  removeFromWishlist(index: number): void {
    console.log("click chui gasaan" + index);
    this.wishlistService.deleteData(index).subscribe(
      () => {
        window.alert("Item deleted");
        // Fetch the updated wishlist items after deleting the item
        this.loadWishlistItems();
      },
      (error) => {
        console.error("Error deleting item:", error);
        // Handle error as needed
      }
    );
  }

  addToCart(product: any): void {
    // Implement your logic for adding to cart here
  }

  increaseQuantity(index: any): void {
    const details = {
      wishlistId: index.wishlistId,
      customerId: 1,
      price: index.price,
      totalAmount: index.totalAmount + index.price,
      name: index.name,
      description: index.description,
      quantity: index.quantity + 1,
      productImageId: index.productImageId
    };

    this.updateWishlistItem(index.wishlistId, details);
  }

  decreaseQuantity(index: any): void {
    if (index.quantity > 1) {
      const details = {
        wishlistId: index.wishlistId,
        customerId: 1,
        price: index.price,
        totalAmount: index.totalAmount - index.price,
        name: index.name,
        description: index.description,
        quantity: index.quantity - 1,
        productImageId: index.productImageId
      };

      this.updateWishlistItem(index.wishlistId, details);
    }
  }

  updateWishlistItem(wishlistId: any, details: any): void {
    this.wishlistService.updateWishlistItem(wishlistId, details).subscribe(
      () => {
        console.log('Wishlist item updated successfully');
        // Refresh the wishlist after updating the item
        this.loadWishlistItems();
      },
      (error) => {
        console.error('Error updating wishlist item', error);
      }
    );
  }
}
