export function listCountriesMarkup(data, refs) {
  refs.countryInfo.innerHTML = '';

  let markup = data
    .map(
      ({ flags, name }) => `<li class="country-item">
<img src="${flags.png}" alt="flag of ${name.official}" class="country-image">
<h2 class="country-name">${name.common}</h2>
</li>`
    )
    .join('');

  refs.countryList.innerHTML = markup;
}
