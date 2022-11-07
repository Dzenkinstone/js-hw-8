// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(SimpleLightbox);
// Change code below this line

const gallery = document.querySelector('.gallery');
console.log(gallery);

const collection = galleryItems
  .map(
    item =>
      `<div class ="gallery__item"><a class="gallery__link" href="${item.original}"><img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"></a></div>`
  )
  .join('');
gallery.innerHTML = collection;

gallery.addEventListener('click', onImageClick);

function onImageClick(event) {
  event.preventDefault();
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
