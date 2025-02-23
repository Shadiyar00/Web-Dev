import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { CommonModule } from '@angular/common';
import { Category } from './models/category';
import { Product } from './models/product';
import { ProductListComponent } from './components/product-list/product-list.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductsComponent, CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {
  title = 'product-list';
  categories: Category[] = [
    { id: 1, name: 'Смартфоны' },
    { id: 2, name: 'Аудио, Видео' },
    { id: 3, name: 'Бытовая техника' },
    { id: 4, name: 'Компьютер' }
  ];


  products: Product[] = [
    {
    id: 1, image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium', 
    name: 'Apple iPhone 13 128Gb черный', 
    description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000', 
    rating: 5,
    categoryId: 1,
    gallery: [
      'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-medium'
      ] 
  },
    { id: 2, 
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium', 
      name: 'Смартфон Apple iPhone 16 Pro Max 256Gb черный', 
      description: 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета. Это самое производительное устройство в линейке Apple iPhone с масштабным дисплеем, потрясающей производительностью и невероятной внешней эргономикой. Iphone 16 pro max – настоящий титан в своем семействе.', 
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000', 
      rating: 5, 
      categoryId: 1, 
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h08/hd3/87295489376286.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h04/h8b/87295489409054.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hfc/h0c/87295489441822.png?format=gallery-medium'
      ] 
    },
    { id: 3, 
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium', 
      name: 'Смартфон Apple iPhone 15 128Gb черный', 
      description: 'Apple iPhone 15 - смартфон, сочетающий в себе передовую оптику, мощный процессор, долгоиграющую батарею и запоминающийся дизайн. Смартфон получил динамический остров, на который выводятся уведомления и другая важная информация.', 
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000', 
      rating: 5, 
      categoryId: 1,  
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hbf/h6b/86275143598110.jpg?format=gallery-medium'
      ] 
    },
    { id: 4, 
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium', 
      name: 'Смартфон Samsung Galaxy S24 Ultra 5G 12 ГБ/256 ГБ серый', 
      description: 'Элегантный. Прочный. Впечатляющий.Представляем вам Galaxy S24 Ultra - совершенное сочетание формы с новым титановым корпусом и плоским 6,8-дюймовым дисплеем.Galaxy AI теперь на вашем мобильном устройстве. Добро пожаловать в эру мобильного искусственного интеллекта AI. С Galaxy S24 Ultra вы сможете открыть совершенно новые уровни творчества, продуктивности и возможностей, используя только ваш смартфон.', 
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000', 
      rating: 5, 
      categoryId: 1,  
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/ha8/84963297394718.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hce/h21/84963123462174.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hdb/h7e/84963123494942.png?format=gallery-medium'
      ] },
    { id: 5, 
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/h23/84963273736222.png?format=gallery-medium', 
      name: 'Смартфон Samsung Galaxy S24 5G 8 ГБ/256 ГБ черный', 
      description: 'Добро пожаловать в эру мобильного AI. Откройте для себя новый уровень возможностей для творчества и продуктивности вместе с самым важным устройством в вашей жизни — новым смартфоном Galaxy S24 | S24+.', 
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-5g-8-gb-256-gb-chernyi-116042629/?c=750000000', 
      rating: 5, 
      categoryId: 1,  
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h7b/h6d/84963273867294.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h64/h77/84963114188830.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h61/h58/84963114221598.png?format=gallery-medium'
      ] },

      { id: 2, 
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h31/hd7/64362668556318.jpg?format=gallery-medium', 
        name: 'Наушники Apple AirPods 3 with Lightning Charging Case белый', 
        description: 'Динамический драйвер, разработанный Apple, использует специальный усилитель, обеспечивая невероятную детальность звучания. Вы будете чётко слышать весь спектр — от глубоких, насыщенных басов до кристально чистых высоких нот.', 
        link: 'https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000', 
        rating: 5, 
        categoryId: 2, 
        gallery: [
          'https://resources.cdn-kaspi.kz/img/m/p/he8/h47/64362670358558.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h30/ha4/64362737860638.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h63/h66/64362740416542.jpg?format=gallery-medium'
        ] },
  ];
  selectedCategoryId: number | undefined;

  selectCategory(categoryId?: number) {
    this.selectedCategoryId = categoryId;
  }

  get filteredProducts(): Product[] {
    return this.selectedCategoryId
      ? this.products.filter(product => product.categoryId === this.selectedCategoryId)
      : this.products;
  }
}
