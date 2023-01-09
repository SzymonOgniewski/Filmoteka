import { trendingData, genresData } from './fetch';

let page = 1;
const moveList = document.querySelector('.gallery');

const getGenresList = () => {
  return genresData();
};

getGenresList();

console.log(getGenresList());

// console.log(
//   '🚀 ~ file: popularMovies.js:16 ~ getGenresList()',
//   getGenresList()
// );

const showPopularMovies = () => {
  let markup = '';
  trendingData(page).then(elm => {
    let movies = elm.results;

    movies.forEach(elm => {
      const shortGenres = elm.genre_ids.splice(0, 2);

      //   genresData().then(elm => {
      //     let genres = elm.genres;
      //     let moveGenresName = [];
      //     shortGenres.forEach(ids => {
      //       for (i = 0; i < genres.length; i++) {
      //         if (ids === genres[i].id) {
      //           moveGenresName.push(genres[i].name.toString());
      //         }
      //       }
      //     });
      //     genresStr = moveGenresName.toString().replaceAll(',', ', ');
      //   });

      if (elm.poster_path === null) {
        elm.poster_path =
          'http://www2.kanazawa-it.ac.jp/moriken/Student/Noimg.jpg';
      } else {
        elm.poster_path = `https://image.tmdb.org/t/p/w500//${elm.poster_path}`;
      }

      markup += `<li class="move_gallery__item">
    <img class="move_gallery__image" src="${elm.poster_path}">
     <div class="move_gallery__title">${elm.title}</div>
     <div class="move_gallery__genres">genres | ${elm.release_date}</div>
     </li>`;
    });

    moveList.insertAdjacentHTML('beforeend', markup);
  });
};

export { showPopularMovies };
