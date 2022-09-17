import { Notify } from 'notiflix/build/notiflix-notify-aio';
import fetchCountry from './fetchCountries';

var debounce = require('lodash.debounce');

refs = {
  input: document.getElementById('search-box'),
  countryContainer: document.querySelector('.country-list'),
};

const DEBOUNCE_DELAY = 300;
let searchQuery = '';

refs.input.addEventListener('input', debounce(fetchCountries, DEBOUNCE_DELAY));

function fetchCountries(e) {
  e.preventDefault();
  searchQuery = e.target.value;

  const url = `https://restcountries.com/v3.1/name/${searchQuery}?fields=name,capital,population,languages,flags`;

  fetch(url)
    .then(Response => Response.json())
    .then(console.log);
}
