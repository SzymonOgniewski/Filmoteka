import { movieData } from './fetch';
import { showLibraryPagination } from './librarypagination';

const addWatched = moveId => {
  let watchedList = localStorage.getItem('watched');

  if (watchedList === null) {
    watchedList = [];
    watchedList.push(moveId);

    return localStorage.setItem('watched', watchedList);
  }

  const arr = watchedList.split(',');

  if (arr.includes(moveId) === false) {
    arr.push(moveId);
    return localStorage.setItem('watched', arr);
  } else {
    removeWatched(arr, moveId);
  }
};

const getWatched = () => {
  let watchedList = localStorage.getItem('watched');
  if (watchedList !== null) {
    let arr = [];
    arr = watchedList.split(',');
    return arr;
  }
  watchedList = [];
  return watchedList;
};

const removeWatched = (idsList, moveId) => {
  let arr = idsList;

  let filteredArr = arr.filter(e => {
    return e !== moveId;
  });

  if (
    (filteredArr.length === 1 && filteredArr[0].length === 0) ||
    filteredArr.length === 0
  ) {
    return localStorage.removeItem('watched');
  }

  return localStorage.setItem('watched', filteredArr);
};

const addQueue = moveId => {
  let queueList = localStorage.getItem('queue');

  if (queueList === null) {
    queueList = [];
    queueList.push(moveId);

    return localStorage.setItem('queue', queueList);
  }

  const arr = queueList.split(',');

  if (arr.includes(moveId) === false) {
    arr.push(moveId);
    return localStorage.setItem('queue', arr);
  } else {
    removeQueue(arr, moveId);
  }
};

const getQueue = () => {
  let queueList = localStorage.getItem('queue');
  if (queueList !== null) {
    let arr = [];
    arr = queueList.split(',');
    return arr;
  }
  queueList = [];
  return queueList;
};

const removeQueue = (idsList, moveId) => {
  let arr = idsList;

  let filteredArr = arr.filter(e => {
    return e !== moveId;
  });

  if (
    (filteredArr.length === 1 && filteredArr[0].length === 0) ||
    filteredArr.length === 0
  ) {
    return localStorage.removeItem('queue');
  }

  return localStorage.setItem('queue', filteredArr);
};

const showMovies = (moviesArr, display, page = null) => {
  display.textContent = '';
  console.log(moviesArr);

  let currentPage = 1;

  if (page !== null) {
    currentPage = page;
  }

  let hitsPerPage = 6;

  let endSlice = currentPage * hitsPerPage;
  let startSlice = endSlice - hitsPerPage;

  let totalPages = Math.ceil(moviesArr.length / hitsPerPage);
  console.log(totalPages);

  showLibraryPagination(currentPage, totalPages, moviesArr, display);

  if (display === null) {
    return console.log('error: no container to display');
  }

  if (moviesArr === null) {
    console.log('No movies added to library');
  }
  moviesArr = moviesArr.slice(startSlice, endSlice);
  console.log(moviesArr);

  moviesArr.forEach(async elm => {
    let markup = '';
    const data = await movieData(elm);
    let genres = [];

    data.genres.forEach(r => {
      genres.push(r.name);
    });
    let genresStr = genres.slice(0, 2).toString().replace(',', ', ');

    if (data.poster_path === null) {
      data.poster_path =
        'http://www2.kanazawa-it.ac.jp/moriken/Student/Noimg.jpg';
    } else {
      data.poster_path = `https://image.tmdb.org/t/p/w500//${data.poster_path}`;
    }

    markup += `<li class="move_gallery__item" data-movieid="${data.id}">
    <img class="move_gallery__image" src="${
      data.poster_path
    }" width="265" height="398">
     <div class="move_gallery__title">${data.title}</div>
     <div class="move_gallery__genres">${genresStr} | ${data.release_date.slice(
      0,
      4
    )}</div>
     </li>`;

    display.insertAdjacentHTML('beforeend', markup);
  });
};

export { addWatched, getWatched, addQueue, getQueue, showMovies };
