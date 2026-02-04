import { galleryImgArray } from './gallery/gallery-array';
import { markupImgGallery } from './gallery/markup-gallery';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const galleryListEl = document.querySelector('.gallery-list-js');

const markupSetGallery = galleryImgArray
  .map(el => {
    return markupImgGallery(el);
  })
  .join('');

galleryListEl.innerHTML = markupSetGallery;

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  loop: true,
  speed: 1000,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
