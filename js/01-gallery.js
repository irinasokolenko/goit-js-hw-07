import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// const instance = basicLightbox.create(`
//     <h1>Dynamic Content</h1>
//     <p>You can set the content of the lightbox with JS.</p>
// `)
// export const galleryItems = [
//     {
//       preview:
//         'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
//       original:
//         'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
//       description: 'Hokkaido Flower',
//     },
// const markup = galleryItems.map(({preview, original, description}) => 
// `<li><img src="${preview}" alt="${original}"><h2>${description}</h2></li>`);


// galleryItems.insertAdjacentHTML('beforeend', markup.join(''));


const galleryContainer = document.querySelector('.gallery');
const itemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);
galleryContainer.addEventListener('click', onImgClick);

// items
function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}
