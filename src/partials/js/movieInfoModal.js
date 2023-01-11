import { movieData } from './fetch';
import { addQueue, addWatched } from './mylibrary';
import { getWatched } from './mylibrary';
const basicLightbox = require('basiclightbox');
import * as basicLightbox from 'basiclightbox';
let arrW = getWatched();
console.log(arrW);
// let arrQ = [315162, 76600, 800815];
const movieInfoModal = event => {
  event.preventDefault();

  if (event.target.parentElement.nodeName === 'LI') {
    const movieId = event.target.parentElement.getAttribute('data-movieid');
    movieData(movieId).then(data => {
      let genres = [];

      data.genres.forEach(r => {
        genres.push(r.name);
      });
      let genresStr = genres.slice(0, 1).toString().replace(',', ', ');
      const instance = basicLightbox.create(`
      <div class="gallery-modal">
      <button class="gallery-modal__close-btn" id="modal-cb">
        </button>
      <img src="https://image.tmdb.org/t/p/w500//${
        data.poster_path
      }" class="gallery-modal__img"/>
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
        <button class="modal-ls-btn" id="addWatched">ADD TO WATCHED</button>
        <button class="modal-ls-btn" id="addQueue">ADD TO QUEUE</button> 
      </div>
      </div>
    </div>
`);
      instance.show();
      const wBtn = document.getElementById('addWatched');
      // const qBtn = document.getElementById('addQueue');

      if (arrW.includes(movieId)) {
        console.log('yes');
        wBtn.textContent = 'WATCHED';
        wBtn.classList.add('ls-marked');
      }
      if (!arrW.includes(movieId)) {
        console.log('no');
        wBtn.textContent = 'ADD TO WATCHED';
        wBtn.classList.remove('ls-marked');
      }
      wBtn.addEventListener('click', e => {
        wBtn.classList.toggle('ls-marked');
        const toggleText = () => {
          if (wBtn.innerHTML === 'WATCHED') {
            wBtn.innerHTML = 'ADD TO WATCHED';
          } else {
            wBtn.innerHTML = 'WATCHED';
          }
        };
        toggleText();
      });
      // if (arrQ.includes(parseInt(movieId))) {
      //   qBtn.textContent = 'QUEUED';
      //   qBtn.classList.add('ls-marked');
      // } else {
      //   qBtn.textContent = 'ADD TO QUEUE';
      //   qBtn.classList.remove('ls-marked');
      // }

      const closeBtn = document.getElementById('modal-cb');
      closeBtn.addEventListener('click', event => {
        instance.close();
      });
      document.addEventListener('keydown', event => {
        if (event.key !== 'Escape') return;
        if (instance.visible()) instance.close();
      });

      const addWat = document.querySelector('#addWatched');
      const addQue = document.querySelector('#addQueue');

      addWat.addEventListener('click', e => {
        addWatched(movieId);
      });
      addQue.addEventListener('click', e => {
        addQueue(movieId);
      });
    });
  }
};

export { movieInfoModal };
