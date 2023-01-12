import { showMovies } from './mylibrary';

const pagination = document.querySelector('.pagination-container');

let currentPage;

const showLibraryPagination = (currPage, totalPages, moviesArr, display) => {
  if (totalPages <= 1) {
    pagination.textContent = '';
    return;
  }

  currentPage = Number(currPage);
  let pageMinusTwo = currentPage - 2;
  pagination.textContent = '';
  let markup = '';
  let pageMinusOne = currentPage - 1;
  let pagePlusTwo = currentPage + 2;
  let pagePlusOne = currentPage + 1;

  if (currentPage === totalPages) {
    pagePlusOne = totalPages;
    pagePlusTwo = totalPages;
  }
  if (currentPage === 1) {
    pageMinusOne = 1;
    pageMinusTwo = 1;
  }

  markup = `
      <button class="box pagination-prev" type="button" value="-1"><<</button>

      <button class="box pagination-first" type="button" value="1">1</button>
      <button class="box pagination-dotsfirst" type="button" value="...">...</button>
      <button class="box pagination-dectwo" type="button" value="${pageMinusTwo}">${pageMinusTwo}</button>
      <button class="box pagination-decone" type="button" value="${pageMinusOne}">${pageMinusOne}</button>
      <button class="box pagination-currentPage" type="button" value="${currentPage}">${currentPage}</button>
      <button class="box pagination-incone" type="button" value="${pagePlusOne}">${pagePlusOne}</button>
      <button class="box pagination-inctwo" type="button" value="${pagePlusTwo}">${pagePlusTwo}</button>
      <button class="box pagination-dotslast" type="button" value="...">...</button>
      <button class="box pagination-last" type="button" value="${totalPages}">${totalPages}</button>

      <button class="box pagination-next" type="button" value="+1">>></button>
      `;

  pagination.insertAdjacentHTML('beforeend', markup);
  const prevBtn = document.querySelector('.pagination-prev');
  const nextBtn = document.querySelector('.pagination-next');
  const plusOneBtn = document.querySelector('.pagination-incone');
  const plusTwoBtn = document.querySelector('.pagination-inctwo');
  const minusOneBtn = document.querySelector('.pagination-decone');
  const minusTwoBtn = document.querySelector('.pagination-dectwo');
  const dotsFirst = document.querySelector('.pagination-dotsfirst');
  const dotsLast = document.querySelector('.pagination-dotslast');
  const lastBtn = document.querySelector('.pagination-last');
  const firstBtn = document.querySelector('.pagination-first');

  // IFS
  if (currentPage === totalPages) {
    plusOneBtn.style.visibility = 'hidden';
    plusTwoBtn.style.visibility = 'hidden';
    dotsLast.style.visibility = 'hidden';
    lastBtn.style.visibility = 'hidden';
  }
  if (currentPage === totalPages - 1) {
    plusTwoBtn.style.visibility = 'hidden';
    dotsLast.style.visibility = 'hidden';
    lastBtn.style.visibility = 'hidden';
  }
  if (currentPage === totalPages - 2) {
    dotsLast.style.visibility = 'hidden';
    lastBtn.style.visibility = 'hidden';
  }

  if (currentPage === 1) {
    minusOneBtn.style.visibility = 'hidden';
    minusTwoBtn.style.visibility = 'hidden';
    dotsFirst.style.visibility = 'hidden';
    firstBtn.style.visibility = 'hidden';
  }
  if (currentPage === 2) {
    minusTwoBtn.style.visibility = 'hidden';
    dotsFirst.style.visibility = 'hidden';
    firstBtn.style.visibility = 'hidden';
  }
  if (currentPage === 3) {
    dotsFirst.style.visibility = 'hidden';
    firstBtn.style.visibility = 'hidden';
  }
  if (currentPage === 4) {
    dotsFirst.textContent = '1';
    dotsFirst.value = 1;
    firstBtn.style.visibility = 'hidden';
  }
  //
  //event listeners
  prevBtn.addEventListener('click', e => {
    previousPage(moviesArr, display, currentPage);
    // showPagination(currentPage);
  });
  nextBtn.addEventListener('click', e => {
    nextPage(currentPage, totalPages, moviesArr, display);
  });
  firstBtn.addEventListener('click', e => {
    currentPage = firstBtn.value;

    showMovies(moviesArr, display, currentPage);
  });

  lastBtn.addEventListener('click', e => {
    currentPage = lastBtn.value;

    showMovies(moviesArr, display, currentPage);
  });

  plusOneBtn.addEventListener('click', e => {
    currentPage = plusOneBtn.value;
    showMovies(moviesArr, display, currentPage);
  });

  plusTwoBtn.addEventListener('click', e => {
    currentPage = plusTwoBtn.value;
    showMovies(moviesArr, display, currentPage);
  });

  minusOneBtn.addEventListener('click', e => {
    currentPage = minusOneBtn.value;
    showMovies(moviesArr, display, currentPage);
  });

  minusTwoBtn.addEventListener('click', e => {
    currentPage = minusTwoBtn.value;
    showMovies(moviesArr, display, currentPage);
  });
};

const previousPage = (moviesArr, display, currentPage) => {
  if (currentPage === 1) {
    return;
  }
  currentPage = currentPage - 1;

  showMovies(moviesArr, display, currentPage);
};

const nextPage = (currentPage, totalPages, moviesArr, display) => {
  if (currentPage === totalPages) {
    return;
  }
  currentPage = currentPage + 1;

  showMovies(moviesArr, display, currentPage);
};

export { showLibraryPagination };
