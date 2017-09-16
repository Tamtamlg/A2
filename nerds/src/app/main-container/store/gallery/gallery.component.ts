import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public links: GalleryItem[] = LINKS;

}

export class GalleryItem {
  imgSrc: string;
  name: string;
  title: string;
  price: string;
}

let LINKS: GalleryItem[] = [
  {
    imgSrc: './assets/img/galery-1.png',
    name: 'Aviator',
    title: 'Интернет-магазин с личным кабинетом',
    price: '10 000 p.'
  },
  {
    imgSrc: './assets/img/galery-2.png',
    name: 'Sunset',
    title: 'Интернет-магазин с личным кабинетом',
    price: '20 000 p.'
  },
  {
    imgSrc: './assets/img/galery-3.png',
    name: 'Forte',
    title: 'Интернет-магазин с личным кабинетом',
    price: '30 000 p.'
  },
  {
    imgSrc: './assets/img/galery-4.png',
    name: 'Marquee',
    title: 'Интернет-магазин с личным кабинетом',
    price: '40 000 p.'
  },
  {
    imgSrc: './assets/img/galery-5.png',
    name: 'Avenue',
    title: 'Интернет-магазин с личным кабинетом',
    price: '50 000 p.'
  },
  {
    imgSrc: './assets/img/galery-6.png',
    name: 'Dovetail',
    title: 'Интернет-магазин с личным кабинетом',
    price: '60 000 p.'
  },
  {
    imgSrc: './assets/img/galery-1.png',
    name: 'Aviator',
    title: 'Интернет-магазин с личным кабинетом',
    price: '10 000 p.'
  },
  {
    imgSrc: './assets/img/galery-2.png',
    name: 'Sunset',
    title: 'Интернет-магазин с личным кабинетом',
    price: '20 000 p.'
  }
]