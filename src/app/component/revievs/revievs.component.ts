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
          slidesPerView: 4
        },

      }
    });
  }

  // images = [
  //   { src: 'assets/img/telefon1.png' },
  //   { src: 'assets/img/telefon2.png' },
  //   { src: 'assets/img/telefon3.png' },
  //   { src: 'assets/img/telefon4.png' },
  //   { src: 'assets/img/telefon5.png' },
  //   { src: 'assets/img/telefon6.png' },
  //   { src: 'assets/img/telefon7.png' },
  //   { src: 'assets/img/telefon8.png' },
  // ];

  isPopupVisible = false;
  currentImageSrc = '';

  openPopup(imageSrc: string): void {
    this.currentImageSrc = imageSrc;
    this.isPopupVisible = true;
  }

  closePopup(event?: MouseEvent): void {
    if (event) {
      event.stopPropagation();
    }
    this.isPopupVisible = false;
  }
}   