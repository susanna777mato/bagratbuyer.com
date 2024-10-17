import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

@Component({
  selector: 'app-revievs',
  templateUrl: './revievs.component.html',
  styleUrls: ['./revievs.component.css']
})
export class RevievsComponent implements OnInit {
   
   
  ngOnInit(): void{
    const swiper = new Swiper('.swiper', {
      loop: true,
      grabCursor: true,
      modules: [Navigation, Pagination],
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
       clickable: true,
       dynamicBullets: true
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      breakpoints: {
        0:{
          slidesPerView: 2
        },

        420:{
          slidesPerView: 3
        },

        620:{
          slidesPerView: 4
        }
        ,
        1024:{
          slidesPerView: 5
        },

      }
    
    });
  }
}
