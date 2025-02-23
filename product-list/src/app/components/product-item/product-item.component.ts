import { Component, Input } from '@angular/core';
import { Product } from '/Users/Admin/OneDrive/Desktop/Web-Dev/lab4/product-list/src/app/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  standalone: true
})
export class ProductItemComponent {
  @Input() product!: Product;
}
