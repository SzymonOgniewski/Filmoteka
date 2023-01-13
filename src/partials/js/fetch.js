import Spinner from 'spin';
const token = 'dd32b08009b8c26db83a645989914c74';
const spinner = new Spinner({ color: '#000', lines: 12 });
const galleryTarget = document.querySelector('.gallery-target');
const libraryTarget = document.querySelector('.library-target');

async function genresData() {
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${token}&language=en-US`
  );
  const genresObject = await response.json();
  return genresObject.genres;
}

async function movieData(movie_id) {
  spinner.spin(libraryTarget);

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${token}&language=en-US`
  );
  spinner.stop();
  const moveData = await response.json();
  return moveData;
}

async function queryData(query, page) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${token}&query=${query}&page=${page}&language=en-US`
  );
  if (!response.ok) {
    throw new Error(response.status);
  }
  return await response.json();
}

async function trendingData(page) {
  spinner.spin(galleryTarget);

  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${token}&page=${page}`
  );
  if (!response.ok) {
    throw new Error(response.status);
  }
  spinner.stop();
  return response.json();
}

export { genresData, movieData, queryData, trendingData };
