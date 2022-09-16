export default function fetchCountry() {
  fetch()
    .then(result => result.json())
    .then(console.log);
}