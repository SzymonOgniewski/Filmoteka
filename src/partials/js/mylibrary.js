import { movieData, genresData } from './fetch';

const addWatched = moveId => {
  let watchedArr = [];
  localStorage.setItem('watched', watchedArr);
};

const getWatched = () => {
  const watched = localStorage.getItem('watched');
  console.log(watched);
};

const addQueue = moveId => {};
const getQueue = () => {};

export { addWatched, getWatched, addQueue, getQueue };
