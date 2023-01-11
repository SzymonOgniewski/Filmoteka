import { movieData, genresData } from './fetch';

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
  return;
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
  }
};
const getQueue = () => {};

const showWatched = (moviesArr, display) => {
  display.textContent = '';

  if (display === null) {
    return console.log('error: no container to display');
  }

  if (moviesArr === null) {
    console.log('No movies added to library');
  }

  moviesArr.forEach(async elm => {
    let markup = '';
    const data = await movieData(elm);

    if (data.poster_path === null) {
      data.poster_path =
        'http://www2.kanazawa-it.ac.jp/moriken/Student/Noimg.jpg';
    } else {
      data.poster_path = `https://image.tmdb.org/t/p/w500//${data.poster_path}`;
    }

    markup += `<li class="move_gallery__item" data-movieid="${data.id}">
    <img class="move_gallery__image" src="${data.poster_path}" width="265" height="398">
     <div class="move_gallery__title">${data.title}</div>
     <div class="move_gallery__genres">genres | ${data.release_date}</div>
     </li>`;

    display.insertAdjacentHTML('beforeend', markup);
  });
};

export { addWatched, getWatched, addQueue, getQueue, showWatched };
