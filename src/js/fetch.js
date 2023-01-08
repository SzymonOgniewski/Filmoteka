export { fetchData };

const token = 'dd32b08009b8c26db83a645989914c74';

const listData = () => {
  fetch(
    'https://api.themoviedb.org/3/genre/movie/list?api_key=${token}&language=en-US'
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        return promise.reject('Something went wrong!');
      }
    })
    .then(data => {
      console.log(data).catch(error => console.log('error', error));
    });
};

const movieData = () => {
  fetch(
    'https://api.themoviedb.org/3/movie/${movie_id}?api_key=${token}&language=en-US'
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        return promise.reject('Something went wrong!');
      }
    })
    .then(data => {
      console.log(data).catch(error => console.log('error', error));
    });
};

const queryData = () => {
  fetch(
    'https://api.themoviedb.org/3/search/movie?api_key=${token}&query=${query}&page=${page}&language=en-US'
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        return promise.reject('Something went wrong!');
      }
    })
    .then(data => {
      console.log(data).catch(error => console.log('error', error));
    });
};

const pageData = () => {
  fetch(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=${token}&page=${page}'
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        return promise.reject('Something went wrong!');
      }
    })
    .then(data => {
      console.log(data).catch(error => console.log('error', error));
    });
};
