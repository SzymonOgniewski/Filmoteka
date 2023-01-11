import { showPopularMovies } from './partials/js/popularMovies';
import { footerModal } from './partials/js/modal';
import { movieInfoModal } from './partials/js/movieInfoModal';
import { getWatched, showWatched } from './partials/js/mylibrary';

const gallery = document.querySelector('.gallery');
const library = document.querySelector('.libraryData');

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
    showWatched(watchedArr, library);
  }
}
