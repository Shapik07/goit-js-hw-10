
 export function infoCountry(data, refs) {
  const { capital, flags, language, name, population } = data[0];
  const languages = Object.values(data[0].languages).join(', ')

  refs.countryList.innerHTML = '';

   refs.countryInfo.innerHTML = `<div class="country-info">
  <div class="main-info">
  <img
    src="${flags.png}"
    alt="flag of ${name.official}"
    class="country-info_flag"
  />
  <h2 class="country-info_name">${name.official}</h2>
  </div>
  <ul class="country-info_list">
    <li class="country-info_list--capital">
      <span class="country-info_list--capital-text">Capital: </span>
      <span class="country-info_list--capital-link">${capital}</span>
    </li>
    <li class="country-info_list--population"><span class="country-info_list--population-text">Population: </span>
      <span class="country-info_population-link">${population}</span>
    </li>
    <ul class="languages">
      <li class="language_text">Language: <span class="languages"> ${languages} </span></li>
    </ul>
  </ul>
</div>`;
}

