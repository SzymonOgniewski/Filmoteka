import { showPopularMovies } from './partials/js/popularMovies';
import { footerModal } from './partials/js/modal';
import { movieInfoModal } from './partials/js/movieInfoModal';
import { getWatched } from './partials/js/mylibrary';

getWatched();

footerModal();

window.addEventListener('load', e => {
  showPopularMovies(1);
});

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', movieInfoModal);


