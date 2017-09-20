import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      this.typeSort();
  }

  public links: GalleryItem[] = LINKS;

  public flag;

  p: number = 1;

  priceSort() {
    this.flag = 'sort';
    this.links.sort(function (link1, link2) {
      if (link1.price < link2.price) {
        return -1;
      } else if (link1.price > link2.price) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  funcSort() {
    this.flag = 'func';
    this.links.sort(function (link1, link2) {
      if (link1.func < link2.func) {
        return -1;
      } else if (link1.func > link2.func) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  typeSort() {
    this.flag = 'type';
    this.links.sort(function (link1, link2) {
      if (link1.type < link2.type) {
        return -1;
      } else if (link1.type > link2.type) {
        return 1;
      } else {
        return 0;
      }
    });
  }

}

export class GalleryItem {
  imgSrc: string;
  name: string;
  title: string;
  price: number;
  func: number;
  type: string;
}

let LINKS: GalleryItem[] = [
  {
    imgSrc: './assets/img/galery-1.png',
    name: 'Aviator',
    title: 'Интернет-магазин',
    price: 5000,
    func: 7,
    type: 'store'
  },
  {
    imgSrc: './assets/img/galery-2.png',
    name: 'Sunset',
    title: 'Блог',
    price: 4500,
    func: 5,
    type: 'blog'
  },
  {
    imgSrc: './assets/img/galery-3.png',
    name: 'Forte',
    title: 'Интернет-магазин',
    price: 4000,
    func: 3,
    type: 'store'
  },
  {
    imgSrc: './assets/img/galery-4.png',
    name: 'Marquee',
    title: 'Лендинг',
    price: 3000,
    func: 2,
    type: 'landing'
  },
  {
    imgSrc: './assets/img/galery-5.png',
    name: 'Avenue',
    title: 'Лендинг',
    price: 5000,
    func: 1,
    type: 'landing'
  },
  {
    imgSrc: './assets/img/galery-6.png',
    name: 'Dovetail',
    title: 'Лендинг',
    price: 6000,
    func: 4,
    type: 'landing'
  },
  {
    imgSrc: './assets/img/galery-7.png',
    name: 'Aviator',
    title: 'Интернет-магазин',
    price: 5000,
    func: 7,
    type: 'store'
  },
  {
    imgSrc: './assets/img/galery-8.png',
    name: 'Sunset',
    title: 'Блог',
    price: 4500,
    func: 5,
    type: 'blog'
  },
  {
    imgSrc: './assets/img/galery-9.png',
    name: 'Forte',
    title: 'Интернет-магазин',
    price: 4000,
    func: 3,
    type: 'store'
  },
  {
    imgSrc: './assets/img/galery-10.png',
    name: 'Marquee',
    title: 'Лендинг',
    price: 3000,
    func: 2,
    type: 'landing'
  },
  {
    imgSrc: './assets/img/galery-11.png',
    name: 'Avenue',
    title: 'Лендинг',
    price: 5000,
    func: 1,
    type: 'landing'
  },
  {
    imgSrc: './assets/img/galery-12.png',
    name: 'Dovetail',
    title: 'Лендинг',
    price: 6000,
    func: 4,
    type: 'landing'
  }
]