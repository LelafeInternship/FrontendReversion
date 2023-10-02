import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-items-list',
  templateUrl: './cart-items-list.component.html',
  styleUrls: ['./cart-items-list.component.css']
})
export class CartItemsListComponent {
  // Initialize your rows with data
  rows: any[] = [
    {
      id: 1,
      productImage: "1.png",
      productName: "Bell Pepper",
      soldBy: "Anees",
      quantity: 500,
      totalItems: 1,
      price: 30,
      save: 20,
      totalPrice: 0
    },
    {
      id: 2,
      productImage: "2.png",
      productName: "Egg Plant",
      soldBy: "Anees",
      quantity: 250,
      totalItems: 1,
      price: 20,
      save: 15,
      totalPrice: 0
    },
    {
      id: 3,
      productImage: "3.png",
      productName: "Onion",
      soldBy: "Gowher",
      quantity: 70,
      totalItems: 1,
      price: 80,
      save: 50,
      totalPrice: 0
    },
  ];
  // Function to decrease the quantity for a specific row
  decreaseQuantity(row: any) {
    if (row.totalItems > 1) {
      row.totalItems--;
      this.updateTotalPrice(row);
    }
  }

  // Function to increase the quantity for a specific row
  increaseQuantity(row: any) {
    row.totalItems++;
    this.updateTotalPrice(row);
  }

  // Function to update the total price for a specific row
  updateTotalPrice(row: any) {
    row.totalPrice = (row.price - row.save) * row.totalItems;
  }

  // Function to remove product from cart
  removeFromCart(deleteRow: any) {
    this.rows = this.rows.filter(row => row !== deleteRow);
  }

  // Function to add item save for later
  saveForLater(row: any) {
    console.log(row.id);
  }
}
