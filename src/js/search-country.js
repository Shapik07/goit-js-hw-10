import fetchCountry from './fetchCountries';

var debounce = require('lodash.debounce');

refs = {
  input: document.getElementById('search-box'),
  countryContainer: document.querySelector('.country-list'),
};

const DEBOUNCE_DELAY = 300;

refs.input.addEventListener('keyup', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
  e.preventDefault();

  const searchQuery = e.target.value;

  const url = `https://restcountries.com/v3.1/name/${searchQuery}?fields=name,capital,population,languages,flags`;

  fetch(url)
    .then(Response => Response.json())
    .then(console.log);
}


