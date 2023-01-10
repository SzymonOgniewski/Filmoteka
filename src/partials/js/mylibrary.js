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

const getWatched = () => {};

const removeWatched = (idsList, moveId) => {
  let arr = idsList;

  filteredArr = arr.filter(e => {
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

export { addWatched, getWatched, addQueue, getQueue };
