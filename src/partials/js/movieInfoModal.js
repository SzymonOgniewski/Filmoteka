import { movieData } from './fetch';
import { addQueue, addWatched } from './mylibrary';
const basicLightbox = require('basiclightbox');
import * as basicLightbox from 'basiclightbox';

const movieInfoModal = event => {
  event.preventDefault();

  if (event.target.parentElement.nodeName === 'LI') {
    const movieId = event.target.parentElement.getAttribute('data-movieid');
    movieData(movieId).then(data => {
      const instance = basicLightbox.create(`
      <div class="gallery-modal">
      <button class="gallery-modal__close-btn" id="modal-cb">
          <svg width="20px" height="20px">
            <use href="../../images/symbol-defs.svg#icon-close"></use>
          </svg>
        </button>
      <img src="https://image.tmdb.org/t/p/w500//${
        data.poster_path
      }" class="gallery-modal__img"/>
      <h3 class="gallery-modal__title">${data.original_title}</h3>
      <table>
        <tr>
          <td class="table-data__name">Vote/Votes</td>
          <td class="table-data__value"><span>${data.vote_average.toFixed(
            2
          )} /</span> ${data.vote_count}</td>
        </tr>
        <tr>
          <td class="table-data__name">Popularity</td>
          <td class="table-data__value">${data.popularity}</td>
        </tr>
        <tr>
          <td class="table-data__name">Original Title</td>
          <td class="table-data__value"> ${data.original_title}</td>
        </tr>
        <tr>
          <td class="table-data__name">Genre</td>
          <td class="table-data__value">${data.genre}</td>
        </tr>
      </table>
      <h4>About</h4>
      <p>${data.overview}</p>
      <div class="modal-btns">
        <button id="addWatched">ADD TO WATCHED</button>
        <button id="addQueue">ADD TO QUEUE</button> 
      </div>
    </div>
`);
      instance.show();
      const closeBtn = document.getElementById('modal-cb');
      console.log(closeBtn);
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
      // console.log(addQueue, addWatched);
    });
  }
  //   if (event.target.nodeName === 'LI') {
  //     const movieId = event.target.getAttribute('data-movieid');
  //     movieData(movieId).then(data => {
  //       const instance = basicLightbox.create(`
  //       <div class="gallery-modal">
  //       <img src="https://image.tmdb.org/t/p/w500//${
  //         data.poster_path
  //       }" class="gallery-modal__img"/>
  //       <h3>${data.original_title}</h3>
  //       <table>
  //         <tr>
  //           <td>Vote/Votes</td>
  //           <td>${data.vote_average.toFixed(2)} / ${data.vote_count}</td>
  //         </tr>
  //         <tr>
  //           <td>Popularity</td>
  //           <td>${data.popularity}</td>
  //         </tr>
  //         <tr>
  //           <td>Original Title</td>
  //           <td> ${data.original_title}</td>
  //         </tr>
  //         <tr>
  //           <td>Genre</td>
  //           <td>${data.genre}</td>
  //         </tr>
  //       </table>
  //       <h4>About</h4>
  //       <p>${data.overview}</p>
  //       <div class="modal-btns">
  //         <button id="addWatched">ADD TO WATCHED</button>
  //         <button id="addQueue">ADD TO QUEUE</button>
  //       </div>
  //     </div>
  // `);
  //       instance.show();
  //       const addWatched = document.querySelector('#addWatched');
  //       const addQueue = document.querySelector('#addQueue');

  //       console.log(addQueue, addWatched);
  //     });
  //   }
};

export { movieInfoModal };
