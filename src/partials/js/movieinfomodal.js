import { movieData } from './fetch';
import { addQueue, addWatched } from './mylibrary';
import { getWatched, getQueue } from './mylibrary';
const basicLightbox = require('basiclightbox');
import * as basicLightbox from 'basiclightbox';

const movieinfomodal = event => {
  event.preventDefault();

  if (event.target.parentElement.nodeName === 'LI') {
    const movieId = event.target.parentElement.getAttribute('data-movieid');
    movieData(movieId).then(data => {
      let genres = [];

      data.genres.forEach(r => {
        genres.push(r.name);
      });
      let genresStr = genres.slice(0, 1).toString().replace(',', ', ');
      let arrWatched = getWatched();
      let arrQueue = getQueue();
      let watchedBtn = '';
      let queueBtn = '';
      if (arrWatched.includes(movieId)) {
        watchedBtn = `<button class="modal-ls-btn ls-marked" id="addWatched">WATCHED</button>`;
      } else {
        watchedBtn = `<button class="modal-ls-btn" id="addWatched">ADD TO WATCHED</button>`;
      }
      if (arrQueue.includes(movieId)) {
        queueBtn = `<button class="modal-ls-btn ls-marked" id="addQueue">QUEUED</button>`;
      } else {
        queueBtn = `<button class="modal-ls-btn" id="addQueue">ADD TO QUEUE</button>`;
      }

      if (data.poster_path === null) {
        data.poster_path =
          'http://www2.kanazawa-it.ac.jp/moriken/Student/Noimg.jpg';
      } else {
        data.poster_path = `https://image.tmdb.org/t/p/w500//${data.poster_path}`;
      }

      const instance = basicLightbox.create(
        `
      <div class="gallery-modal">
      <button class="gallery-modal__close-btn" id="modal-cb">
        </button>
      <img src="${data.poster_path}" class="gallery-modal__img"/>
      <div>
      <h3 class="gallery-modal__title">${data.original_title}</h3>
      <table class="table">
        <tr class="table-data__row">
          <td class="table-data__name">Vote/Votes</td>
          <td class="table-data__value"><span class="rating">${data.vote_average.toFixed(
            2
          )}</span> / ${data.vote_count}</td>
        </tr>
        <tr>
          <td class="table-data__name">Popularity</td>
          <td class="table-data__value">${Math.round(data.popularity)}</td>
        </tr>
        <tr>
          <td class="table-data__name">Original Title</td>
          <td class="table-data__value"> ${data.original_title}</td>
        </tr>
        <tr>
          <td class="table-data__name">Genre</td>
          <td class="table-data__value">${genresStr} </td>
        </tr>
      </table>
      <h4 class="gallery-modal__about">ABOUT</h4>
      <p class="gallery-modal__overview">${data.overview}</p>
      <div class="modal-btns">
        ${watchedBtn}
        ${queueBtn}
      </div>
      </div>
    </div>
      `
      );
      instance.show();
      const closeBtn = document.getElementById('modal-cb');
      const addWat = document.querySelector('#addWatched');
      const addQue = document.querySelector('#addQueue');

      closeBtn.addEventListener('click', event => {
        instance.close();
      });
      document.addEventListener('keydown', event => {
        if (event.key !== 'Escape') return;
        if (instance.visible()) instance.close();
      });

      addWat.addEventListener('click', e => {
        addWatched(movieId);
        addWat.classList.toggle('ls-marked');
        const toggleText = () => {
          if (addWat.innerHTML === 'WATCHED') {
            addWat.innerHTML = 'ADD TO WATCHED';
          } else {
            addWat.innerHTML = 'WATCHED';
          }
        };
        toggleText();
      });
      addQue.addEventListener('click', e => {
        addQueue(movieId);
        addQue.classList.toggle('ls-marked');
        const toggleText = () => {
          if (addQue.innerHTML === 'QUEUED') {
            addQue.innerHTML = 'ADD TO QUEUE';
          } else {
            addQue.innerHTML = 'QUEUED';
          }
        };
        toggleText();
      });
    });
  }
};

export { movieinfomodal };
