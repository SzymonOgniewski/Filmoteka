import { showPopularMovies } from './partials/js/popularMovies';
import { footerModal } from './partials/js/modal';
import { movieInfoModal } from './partials/js/movieInfoModal';
import { getWatched, getQueue, showMovies } from './partials/js/mylibrary';

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
}

if (watchedBtn !== null) {
  let watchedArr = getWatched();
  watchedBtn.addEventListener('click', e => {
    showMovies(watchedArr, library);
  });
}

if (queueBtn !== null) {
  let queuedArr = getQueue();
  queueBtn.addEventListener('click', e => {
    showMovies(queuedArr, library);
  });
}
