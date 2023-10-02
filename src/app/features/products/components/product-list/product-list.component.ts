import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    const storedProducts = localStorage.getItem('products');

    if (storedProducts) {
      // Parse the stored products from local storage
      this.products = JSON.parse(storedProducts);
    } else {
      // Fetch products from the service if not found in local storage
      this.productService.getProducts().subscribe(
        (data: any) => {
          // Initialize products with the wishlist status
          this.products = data.map((product: any) => ({
            ...product,
            inWishlist: false,
          }));
          // Save products to local storage
          localStorage.setItem('products', JSON.stringify(this.products));
        },
        (error: any) => {
          console.error('Error fetching products:', error);
          // Handle the error here, e.g., show an error message to the user
        }
      );
    }
  }

  onEyeIconClick(productId: number) {
    this.productService.setSelectedProductId(productId);
  }

  addToCart(product: any) {
    // Implement the logic to add the product to the cart here
  }

  addToWishlist(product: any) {
    const wishlistdata = {
      wishlistId: product.id,
      customerId: 1, // Assuming a hard-coded customer ID for now
      price: product.price,
      totalAmount: product.price,
      name: product.name,
      description: product.description,
      quantity: product.packSize,
      productImageId: product.id
    };

    console.log(wishlistdata);
    this.productService.WishlistAdded(wishlistdata).subscribe(
      (data: any) => {
        // Check if the response contains an 'error' property
        product.inWishlist = true;
        console.log('Product added to wishlist:', data);
        window.alert('Item Added To Wishlist');

        // Update products in local storage
        localStorage.setItem('products', JSON.stringify(this.products));
      },
      (error: any) => {
        console.error('Error adding product to wishlist:', error);
        window.alert('Error adding item to wishlist');
      }
    );
  }
}
