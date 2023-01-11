import { trendingData, genresData } from './fetch';
import { showPagination } from './pagination';

const moveList = document.querySelector('.gallery');

const showPopularMovies = page => {
  moveList.textContent = '';
  let markup = '';
  trendingData(page).then(async elm => {
    let movies = elm.results;

    let totalPages = elm.total_pages;
    let genres = await genresData();

    if (totalPages > 1) {
      showPagination(page, totalPages);
    }

    movies.forEach(async elm => {
      const shortGenres = elm.genre_ids.splice(0, 2);

      let moveGenresName = [];
      shortGenres.forEach(ids => {
        for (let i = 0; i < genres.length; i++) {
          if (ids === genres[i].id) {
            moveGenresName.push(genres[i].name);
          }
        }
      });

      if (elm.poster_path === null) {
        elm.poster_path =
          'http://www2.kanazawa-it.ac.jp/moriken/Student/Noimg.jpg';
      } else {
        elm.poster_path = `https://image.tmdb.org/t/p/w500//${elm.poster_path}`;
      }

      markup += `<li class="move_gallery__item" data-movieid="${elm.id}">
    <img class="move_gallery__image" src="${
      elm.poster_path
    }" width="265" height="398">
     <div class="move_gallery__title">${elm.title}</div>
     <div class="move_gallery__genres">${moveGenresName
       .toString()
       .replaceAll(',', ', ')} | ${elm.release_date}</div>
     </li>`;
    });

    moveList.insertAdjacentHTML('beforeend', markup);
  });
};

export { showPopularMovies };
