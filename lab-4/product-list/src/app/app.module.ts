import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { NgModule } from '@angular/core';
@NgModule({
  declarations: [ProductsComponent],
  imports: [CommonModule], // ✅ Добавляем CommonModule
})
export class ProductsModule {}
