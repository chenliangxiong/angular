import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
})
export class SwiperComponent implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor() { }

  ngOnInit() {}

}
