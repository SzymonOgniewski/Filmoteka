import { showSearchMovies } from './partials/js/search';
import { showPopularMovies } from './partials/js/popularMovies';
import { footerModal } from './partials/js/modal';
import { movieInfoModal } from './partials/js/movieInfoModal';
import { getWatched, getQueue, showMovies } from './partials/js/mylibrary';
import { Notify } from 'notiflix';
import { movies } from './partials/js/search';

const gallery = document.querySelector('.gallery');
const library = document.querySelector('.libraryData');
const watchedBtn = document.querySelector('.library-btn__watched');
const queueBtn = document.querySelector('.library-btn__queued');

getWatched();

footerModal();

window.addEventListener('load', e => {
  showPopularMovies(1);
});

if (gallery !== null) {
  gallery.addEventListener('click', movieInfoModal);
}

if (library !== null) {
  let watchedArr = getWatched();

  if (watchedArr !== undefined) {
    showMovies(watchedArr, library);
  }
  library.addEventListener('click', movieInfoModal);
}

// searchQuery
const inputField = document.querySelector('.search-form');

const searchQuery = document.querySelector('.search-form__input');

inputField.addEventListener('submit', e => {
  event.preventDefault();
  const query = searchQuery.value;
  // Notify.success(`Hey! We found some ${query} movies you may like!`); //nie działa to jak trzeba gdy zrobimy przypadek z warningiem
  showSearchMovies(query, 1);
});

// watchedbtn
if (watchedBtn !== null) {
  watchedBtn.classList.add('ls-marked');
  let watchedArr = getWatched();
  watchedBtn.addEventListener('click', e => {
    watchedBtn.classList.add('ls-marked');
    queueBtn.classList.remove('ls-marked');
    showMovies(watchedArr, library);
  });
}

if (queueBtn !== null) {
  let queuedArr = getQueue();
  queueBtn.addEventListener('click', e => {
    queueBtn.classList.add('ls-marked');
    watchedBtn.classList.remove('ls-marked');
    showMovies(queuedArr, library);
  });
}
