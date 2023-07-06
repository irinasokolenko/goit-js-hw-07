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


const ulRef = document.querySelector('.js-gallery');
const modalRef = document.querySelector('.js-lightbox');
const backdropRef = document.querySelector('.lightbox__overlay');
const imageRef = document.querySelector('.lightbox__image');


const closeBtn = document.querySelector('[data-action="close-lightbox"]');


const cartMarkup = createPictureCartMarkup(galleryItems);
ulRef.insertAdjacentHTML('beforeend', cartMarkup);

ulRef.addEventListener('click', onPictureClick);
closeBtn.addEventListener('click', onCloseBtnClick)
modalRef.addEventListener('click', onBackdropClick);
 


function createPictureCartMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
      <a
        class="gallery__link"
        href = '${original}';
      >
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
    `;
    })
    .join('');
};

function onPictureClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  // console.log(event.target);
  window.addEventListener('keydown', onEscBtnPress);
  modalRef.classList.add('is-open');
  imageRef.src = event.target.dataset.source;
}

function onCloseBtnClick() {
  modalRef.classList.remove('is-open');
  window.removeEventListener('keydown', onEscBtnPress);
  imageRef.src = '';
}

function onBackdropClick(event) {
  if (backdropRef === event.target) {
    onCloseBtnClick();
  }
}
function onEscBtnPress(event) {
  console.log(event);
  if (event.code === 'Escape') {
    onCloseBtnClick();
  }
}