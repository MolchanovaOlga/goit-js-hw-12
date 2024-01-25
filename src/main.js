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

const objUrlParams =  {
        key: "41764698-0ccaaf72f9cf319226b6a04c5",
        q: '',
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page: 1,
        per_page: 40,
    }

form.addEventListener('submit', hendleSearch);

function hendleSearch(event) {
    event.preventDefault();
    loader.classList.add("loader");
    loadMoreBtn.style.display = 'none';
    gallery.innerHTML = '';
    objUrlParams.page = 1;

    objUrlParams.q = textArea.value.trim();
    if (!objUrlParams.q) {
        return;
    }
    fetchImages();

    form.reset();
};

async function getData() {
    axios.defaults.baseURL = "https://pixabay.com";
    return await axios.get('/api/', {params: objUrlParams});
}

async function fetchImages() { 
    try {
        const response = await getData();
        const arrayOfImg = response.data.hits;
        
        if (arrayOfImg.length == 0 || arrayOfImg.length == response.data.totalHits) {
            loadMoreBtn.style.display = 'none';
            return noImages();
        }

        createGallery(arrayOfImg);
        
        if (arrayOfImg.length >= objUrlParams.per_page) {
            loadMoreBtn.style.display = 'flex';
        }

    } catch(error) {
        catchError(error);
    } finally {
        loader.classList.remove("loader");
    }
};

loadMoreBtn.addEventListener('click', handleLoadMore);

function handleLoadMore() {
    loadMoreBtn.style.display = 'none';
    loader.classList.add("loader");
    
    objUrlParams.page += 1;
    getLoadMore();
}

async function getLoadMore() {
    try {
        const response = await getData();
        const arrayOfImg = response.data.hits;
        
        createGallery(arrayOfImg);
        loadMoreBtn.style.display = 'flex';
        scroll();

        const totalPages = Math.ceil(response.data.totalHits / objUrlParams.per_page);
        if (objUrlParams.page >= totalPages) {
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

function scroll() {
    const card = document.querySelector('.gallery-item');
    const heightCard = card.getBoundingClientRect();
    window.scrollBy(0, heightCard.height * 2);
}

function catchError(error) {
    console.log(error);
    const errName = error.name;
    const errText = error.message;
    errorMessage(errName, errText);
}

const objErrorParams = {
    position: "topRight",
    backgroundColor: "#EF4040",
    messageColor: '#fff',
    iconUrl: icon,
}

function noImages() {
    iziToast.error({
      message: "Sorry, there are no images matching<br/>your search query. Please try again!",
      ...objErrorParams,
    });
}

function errorMessage(name, text) {
    iziToast.error({
      message: `${name}: ${text}. Please try again!`,
      ...objErrorParams,
    });
}

function endResults() {
    iziToast.error({
        message: "We're sorry, but you've reached the end of search results.",
        ...objErrorParams,
      });
};

