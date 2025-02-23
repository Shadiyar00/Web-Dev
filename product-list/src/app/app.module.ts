import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductListComponent,
    ProductItemComponent,
  ],
  imports: [CommonModule, BrowserModule],
})
export class ProductsModule {}
