import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './components/summary/summary.component';
import { EmptyComponent } from './components/empty/empty.component';
import { CodesComponent } from './components/codes/codes.component';
import { CartItemsListComponent } from './components/cart-items-list/cart-items-list.component';
import { CheckoutComponent } from './components/checkout/checkout.component';


@NgModule({
  declarations: [
    SummaryComponent,
    EmptyComponent,
    CodesComponent,
    CartItemsListComponent,
    CheckoutComponent,
    
  ],
  imports: [
    CommonModule
  ]
})
export class CartModule { }
