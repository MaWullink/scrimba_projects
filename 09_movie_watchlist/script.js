// TODO:
// 1. Get input value from search field
// 2. Use input to fetch data from API
// 3. Convert API response into usable movie data (array)
// 4. Clear previous results
// 5. Render each movie into the .movies container

const APIKEY = "8498a68";
const form = document.getElementById("search-form");
const input = document.getElementById("search-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value.trim();
  console.log(value);
  fetchData(value);
});

async function fetchData(value = "Oppenheimer") {
  const res = await fetch(
    `http://www.omdbapi.com/?apikey=${APIKEY}&t=${value}`,
  );
  const movieData = await res.json();
  renderMovies(movieData);
}

function renderMovies(movieData) {
  for (movie of movieData) {
    div = document.createElement("div");
  }
}
