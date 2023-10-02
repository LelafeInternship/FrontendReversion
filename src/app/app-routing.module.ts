import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './features/home/components/homepage/homepage.component';
import { WishlistComponent } from './features/cart/components/wishlist/wishlist.component';
import { ProductComponent } from './features/products/components/product/product.component';
import { ProductListComponent } from './features/products/components/product-list/product-list.component';
import { CartItemsListComponent } from './features/cart/components/cart-items-list/cart-items-list.component';
import { CheckoutComponent } from './features/cart/components/checkout/checkout.component';
import { ContactComponent} from './features/contact/contact.component';
import { AboutComponent } from './features/about/about.component';
import { LoginComponent } from './features/auth/components/login/login.component';
import { SignupComponent } from './features/auth/components/signup/signup.component';
import { ForgetComponent } from './features/auth/components/forget/forget.component';
import { ProductItemComponent } from './features/products/components/product-item/product-item.component';
const routes: Routes = [
  {
    path: "",
    component: HomepageComponent
  },
  {
    path: "wishlist",
    component: WishlistComponent
  },
  { 
    path:"product", component: ProductComponent
  },
  {
     path:"product-list", component: ProductListComponent
  },
  {
    path: "cartitemslist",component: CartItemsListComponent
  },
  {
    path: "checkout",
    component: CheckoutComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "forget",
    component: ForgetComponent
  },
  {
    path:"productItem",
    component:ProductItemComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
