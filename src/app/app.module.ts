import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './features/products/components/product/product.component';
import { AdminLayoutComponent } from './features/admin/components/admin-layout/admin-layout.component';
import { FooterComponent } from './features/home/components/footer/footer.component';
import { TopComponent } from './features/home/components/top/top.component';
import { HomepageComponent } from './features/home/components/homepage/homepage.component';
import { CommonModule } from '@angular/common';
import { CartItemsListComponent } from './features/cart/components/cart-items-list/cart-items-list.component';
import { ContactComponent } from './features/contact/contact.component';
import { AboutComponent } from './features/about/about.component';
import { WishlistComponent } from './features/cart/components/wishlist/wishlist.component';
import { FormsModule } from '@angular/forms'
import { LoginComponent } from './features/auth/components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './features/auth/components/signup/signup.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductListComponent } from './features/products/components/product-list/product-list.component';
import { ProductsModule } from './features/products/products.module';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductComponent,
    AdminLayoutComponent,
    FooterComponent,
    TopComponent,
    HomepageComponent,
    CartItemsListComponent,
    ContactComponent,
    AboutComponent,
    WishlistComponent,
    LoginComponent ,
    SignupComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule ,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    BrowserAnimationsModule,
    ProductsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
