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
  library.addEventListener('click', movieInfoModal);
}

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
