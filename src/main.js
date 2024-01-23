import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import axios from 'axios';

import icon from './img/icons/bi_x-octagon.svg';

const form = document.querySelector('form');
const textArea = document.querySelector('textarea');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('span');
const loadMoreBtn = document.querySelector('.load-more');

let counter = 1;
let perPage = 40;

form.addEventListener('submit', event => {
    event.preventDefault();
    loader.classList.add("loader");
    gallery.textContent = '';
    
    fetchImages();

    form.reset();
});

async function getData(val) {

    axios.defaults.baseURL = "https://pixabay.com";
    return await axios.get('/api/', {
        params: {
            key: "41764698-0ccaaf72f9cf319226b6a04c5",
            q: val,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            page: counter,
            per_page: perPage,
        }
    });
}

async function fetchImages() {  
    try {
        const valueOfTextarea = textArea.value;
        const response = await getData(valueOfTextarea);
        const arrayOfImg = response.data.hits;
        const totalPages = Math.ceil(response.data.totalHits / perPage);
        
        if (arrayOfImg.length == 0) {
            return noImages();
        }

        createGallery(arrayOfImg);
   
        if (arrayOfImg.length >= perPage) {
            loadMoreBtn.style.display = 'flex';
            loadMoreBtn.addEventListener('click', () => {
                loadMoreBtn.style.display = 'none';
                loader.classList.add("loader");
                getLoadMore(valueOfTextarea, totalPages);
            });
        }

    } catch(error) {
        catchError(error);
    } finally {
        loader.classList.remove("loader");
    }
};

async function getLoadMore(val, num) {
    counter += 1;
    try {
        const response = await getData(val);
        const arrayOfImg = response.data.hits;
        createGallery(arrayOfImg);
        loadMoreBtn.style.display = 'flex';
            
        if (counter >= num) {
            loadMoreBtn.style.display = 'none';
            return endResults();
        }

    } catch(error) {
        catchError(error);
    } finally {
        loader.classList.remove("loader");
    }
}
  
function createGallery(arr) {
    const galleryList = arr.map(
        ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        return `
        <li class="gallery-item">
            <a class="gallery-link" href="${largeImageURL}">
            <img
                class="gallery-image"
                src="${webformatURL}"
                alt="${tags}"
            />
            </a>
            <ul class="statistics">
                <li class="statistics-item">
                    <h2>Likes</h2>
                    <p>${likes}</p>
                </li>
                <li class="statistics-item">
                    <h2>Views</h2>
                    <p>${views}</p>
                </li>
                <li class="statistics-item">
                    <h2>Comments</h2>
                    <p>${comments}</p>
                </li>
                <li class="statistics-item">
                    <h2>Downloads</h2>
                    <p>${downloads}</p>
                </li>
            </ul>
        </li>
        `
    }).join('');
    gallery.insertAdjacentHTML('beforeend', galleryList);

    const newLightBox = new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        captionDelay: 250,
    });

    newLightBox.refresh();
}

function noImages() {
    iziToast.error({
      message: "Sorry, there are no images matching<br/>your search query. Please try again!",
      position: "topRight",
      backgroundColor: "#EF4040",
      messageColor: '#fff',
      iconUrl: icon,
    });
}

function errorMessage(name, text) {
    iziToast.error({
      message: `${name}: ${text}. Please try again!`,
      position: "topRight",
      backgroundColor: "#EF4040",
      messageColor: '#fff',
      iconUrl: icon,
    });
}

function endResults() {
    iziToast.error({
        message: "We're sorry, but you've reached the end of search results.",
        position: "topRight",
        backgroundColor: "#EF4040",
        messageColor: '#fff',
        iconUrl: icon,
      });
};

function catchError(error) {
    console.log(error);
    const errName = error.name;
    const errText = error.message;
    errorMessage(errName, errText);
}
  