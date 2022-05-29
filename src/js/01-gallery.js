// Add imports above this line
import SimpleLightbox from "simplelightbox";
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm"
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector('.gallery')
gallery.insertAdjacentHTML('beforeend', createGalery (galleryItems) );

function createGalery(galleryItems) {
    
   return galleryItems.map(({ preview, original, description }) => {
     return`<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`  
    }).join('');
}
const ligthBox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });