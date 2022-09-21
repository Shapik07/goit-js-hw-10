import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './fetchCountries';

import { listCountriesMarkup } from './markup/listCountries';
import { infoCountry } from './markup/infoCountry';

var debounce = require('lodash.debounce');

const refs = {
  input: document.getElementById('search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

const DEBOUNCE_DELAY = 300;
let searchQuery = '';

refs.input.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
  e.preventDefault();
  searchQuery = e.target.value.trim();

  if (!searchQuery) {
    clearAll();
    return;
  }

  fetchCountries(searchQuery)
    .then(resolve => {
      counterCountries(resolve);
    })
    .catch(error => {
      console.log(error)
      clearAll();
      Notify.failure('Oops, there is no country with that name');
    });
}

function counterCountries(resolve) {
  if (!resolve.length) {
    return;
  }

  if (resolve.length > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
  } else if (resolve.length > 1 && resolve.length <= 10) {
    console.log(resolve);
    listCountriesMarkup(resolve, refs);
  
  } else if ((resolve.length < 2)) {
    infoCountry(resolve, refs);
  }
}

function clearAll() {
  refs.countryList.innerHTML = '';
  refs.countryInfo.innerHTML = '';
}
