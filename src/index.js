import { showPopularMovies } from './partials/js/popularMovies';
import { getWatched } from './partials/js/mylibrary';

getWatched();

window.addEventListener('load', e => {
  showPopularMovies();
});
