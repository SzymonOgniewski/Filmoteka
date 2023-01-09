const token = 'dd32b08009b8c26db83a645989914c74';

async function genresData() {
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${token}&language=en-US`
  );
  if (!response.ok) {
    throw new Error(response.status);
  }
  return await response.json();
}

async function movieData(movie_id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${token}&language=en-US`
  );
  if (!response.ok) {
    throw new Error(response.status);
  }
  return await response.json();
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
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${token}&page=${page}`
  );
  if (!response.ok) {
    throw new Error(response.status);
  }
  return response.json();
}

export { genresData, movieData, queryData, trendingData };
