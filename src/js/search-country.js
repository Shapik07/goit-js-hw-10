import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './fetchCountries';

var debounce = require('lodash.debounce');

refs = {
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

  fetchCountries(searchQuery)
    .then(resolve => {
      counterCountries(resolve)
      createListCountryMarkup(resolve)
    })
    .catch(error => {
      Notify.failure('Oops, there is no country with that name');
    });
}

function counterCountries(resolve) {
  if (resolve.length > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
  }
}

function createListCountryMarkup(resolve) {
  if (resolve.length > 1 && resolve.length <= 10) {
    resolve.map(() => resolve.forEach(country => {
      
    }))
   }
}
