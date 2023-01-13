import { queryData, genresData } from './fetch';
import { showSearchPagination } from './searchpagination';
import Notiflix, { Notify } from 'notiflix';
import { showPopularMovies } from './popularmovies';
const moveList = document.querySelector('.gallery');

let page = 1;
const showSearchMovies = (query, page) => {
  moveList.textContent = '';
  let markup = '';
  page = page;

  queryData(query, page)
    .then(async elm => {
      //  let searchedVid = inputField.value.trim();

      if (elm.results.length === 0) {
        Notiflix.Notify.failure(
          `Please enter valid name, loaded trending movies`
        );
        showPopularMovies(1);
      }
      let movies = elm.results;
      let currentpage = page;
      let totalPages = elm.total_pages;
      let genres = await genresData();

      if (totalPages > 1) {
        showSearchPagination(query, currentpage, totalPages);
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
    })
    .catch(error => {
      console.log(error);
      Notiflix.Notify.failure(
        `Please enter valid name, loaded trending movies`
      );
      showPopularMovies(1);
    });
};

export { showSearchMovies };
