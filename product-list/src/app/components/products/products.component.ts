import { Component, Input} from '@angular/core';
import { Product } from '../../models/product.model';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  standalone: true,
  imports: [NgFor, NgIf,]
})
export class ProductsComponent {
  products: Product[] = [
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      name: 'Apple iPhone 13 128Gb черный',
      description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-medium'
      ],
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium',
      name: 'Смартфон Apple iPhone 16 Pro Max 256Gb черный',
      description: 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета. Это самое производительное устройство в линейке Apple iPhone с масштабным дисплеем, потрясающей производительностью и невероятной внешней эргономикой. Iphone 16 pro max – настоящий титан в своем семействе.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h08/hd3/87295489376286.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h04/h8b/87295489409054.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hfc/h0c/87295489441822.png?format=gallery-medium'
      ],
    },
    {
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h31/hd7/64362668556318.jpg?format=gallery-medium',
    name: 'Наушники Apple AirPods 3 with Lightning Charging Case белый',
    description: 'Динамический драйвер, разработанный Apple, использует специальный усилитель, обеспечивая невероятную детальность звучания. Вы будете чётко слышать весь спектр — от глубоких, насыщенных басов до кристально чистых высоких нот.',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000',
    gallery: [
      'https://resources.cdn-kaspi.kz/img/m/p/he8/h47/64362670358558.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h30/ha4/64362737860638.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h63/h66/64362740416542.jpg?format=gallery-medium'
    ],
  },
  {
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p38/pbb/11569232.jpg?format=gallery-medium',
    name: 'Фотокамера Sony ZV-E10 KIT 16-50mm чёрный',
    description: 'Новая камера Sony ZV-E10 с матрицей APS-C обеспечивает высокое качество видео и звука, оснащена функциями, оптимизированными для видеоблогеров, а также имеет универсальные возможности подключения дополнительных устройств. Корпорация Sony Electronics анонсировала первую камеру в серии Alpha, предназначенную специально для видеоблогеров ZV-E10, которая сочетает в себе передовые технологии обработки изображений от Sony, удобство использования и набор функций, оптимизированных для создания видеоконтента.',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/sony-zv-e10-kit-16-50mm-chjornyi-102510202/?c=750000000',
    gallery: [
      'https://resources.cdn-kaspi.kz/img/m/p/p1c/pbb/11569233.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pe4/pba/11569235.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pac/pba/11569237.jpg?format=gallery-medium'
    ],
  },
  {
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hb1/had/86299588788254.jpg?format=gallery-medium',
    name: 'Робот-пылесос Xiaomi Robot Vacuum S20 BHR8629EU белый',
    description: 'Пылесос-робот Xiaomi Robot Vacuum S20 поддерживает чистоту напольных покрытий при помощи функций сухой и влажной уборки. Благодаря мощности 5000 Па он собирает пыль, крошки, мусор, волосы, шерсть домашних животных. Пылесос управляется с мобильного устройства средствами приложений Mi Home и Xiaomi Home. Система LDS laser позволяет точно выстраивать маршрут и преодолевать препятствия без столкновений с предметами в комнате.',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/xiaomi-robot-vacuum-s20-bhr8629eu-belyi-120489305/?c=750000000',
    gallery: [
      'https://resources.cdn-kaspi.kz/img/m/p/hed/hd3/86299588853790.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h5c/h6d/86299588919326.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h24/hb1/87319732224030.jpg?format=gallery-medium'
    ],
  },
  {
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h7a/h87/85529393266718.jpg?format=gallery-medium',
    name: 'Холодильник Samsung RB31FERNDSA серебристый',
    description: 'В холодильниках Samsung серии 3050 с нижней морозильной камерой внутренний объем организован максимально эффективно. Благодаря таким элементам, как выдвижная полка Easy Slide, лоток для соусов и ящик морозильника Full Open Box, можно очень легко и быстро класть и доставать из холодильника продукты, не тратя зря время, а новый инверторный компрессор поможет экономить электроэнергию. Благодаря десятилетней гарантии на компрессор вы можете быть уверены в том, что такой холодильник будет радовать вас многие годы.',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/samsung-rb31ferndsa-serebristyi-117760200/?c=750000000',
    gallery: [
      'https://resources.cdn-kaspi.kz/img/m/p/hab/ha4/85529393332254.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h1e/h3b/85529393397790.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h9c/hc9/85529393463326.jpg?format=gallery-medium'
    ],
  },
  {
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pdc/p10/16987867.jpg?format=gallery-medium',
    name: 'Ноутбук Apple MacBook Pro 16.2" / 36 Гб / SSD 1024 Гб / macOS / MX303RU/A',
    description: 'Ноутбук Apple MacBook Pro (MX303) оснащен процессором Apple M4 Max и выполняет роль мощного инструмента для профессиональных пользователей. Этот продукт был разработан для современного использования и может похвастаться 16.2-дюймовым Retina-дисплеем с высоким разрешением, обеспечивающим потрясающее качество изображения. Объем оперативной памяти в 36 ГБ и SSD-накопитель на 1 ТБ гарантируют плавную работу даже при интенсивных нагрузках.',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2-36-gb-ssd-1024-gb-macos-mx303ru-a-132510070/?c=750000000',
    gallery: [
      'https://resources.cdn-kaspi.kz/img/m/p/pc0/p10/16987868.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p3a/p25/16987808.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/paf/p17/16987847.jpg?format=gallery-medium'
    ],
  },
  {
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h4b/h2c/84999216791582.jpg?format=gallery-medium',
    name: 'SSD Kingston SNV2S/1000G 1000 Гб',
    description: 'M.2 накопитель Kingston NV2 – компактное устройство, способное эффективно справляться с требовательными ресурсоемкими задачами и увеличить отзывчивость системы. Накопитель ориентирован на создание контента с разрешением 4K+ и запуск игр. Благодаря объему 1000 ГБ Kingston NV2 предоставляет достаточно пространства для хранения игр, мультимедийных и прочих файлов. Форм-фактор M.2 гарантирует широкую совместимость с настольными ПК и ноутбуками.',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/ssd-kingston-snv2s-1000g-1000-gb-107232387/?c=750000000',
    gallery: [
      'https://resources.cdn-kaspi.kz/img/m/p/h9b/he5/84989217865758.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h8a/h46/84989217931294.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h94/h51/84989217996830.jpg?format=gallery-medium'
    ],
  },
  ];  
  shareOnWhatsApp(link: string) {
    window.open(`https://wa.me/?text=${encodeURIComponent(link)}`, '_blank');
  }

  shareOnTelegram(link: string) {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(link)}`, '_blank');
  }
}

