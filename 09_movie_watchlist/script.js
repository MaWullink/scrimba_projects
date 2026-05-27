// Render movies on page
const APIKEY = "8498a68";
const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const renderMoviesDiv = document.getElementById("movies");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = input.value.trim();
    fetchData(value);
  });
}

async function fetchData(value = "Oppenheimer") {
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=${APIKEY}&s=${value}`,
  );
  const movieData = await res.json();
  if (movieData.Response == "False") {
    renderMoviesDiv.innerHTML =
      "<p>Sorry no movies found. Please try again.</p>";
    return;
  }
  const moviesArray = movieData.Search;
  fetchMovieDetails(moviesArray);
}

async function fetchMovieDetails(array) {
  const moviesArray = array;
  const movieDetails = await Promise.all(
    moviesArray.map(async (movie) => {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${APIKEY}&t=${movie.Title}`,
      );
      const data = await res.json();
      return data;
    }),
  );
  renderMovies(moviesArray, movieDetails);
}

function renderMovies(moviesArray, movieDetails) {
  let innerHTML = "";

  for (let i = 0; i < moviesArray.length; i++) {
    const movie = moviesArray[i];
    const details = movieDetails[i];

    innerHTML += `
      <div class="movie">
        <img class="movie-img" src="${movie.Poster}" alt="" />

        <div class="movie-description">
          <h2>${movie.Title}</h2>

          <div class="movie-details">
            <p>${details.Runtime}</p>
            <p>${details.Genre}</p>

            <button class="watchlist-btn" id="${movie.imdbID}">
              <span class="material-symbols-outlined">add_circle</span>
              <span class="label">Watchlist</span>
            </button>
          </div>

          <p class="summary">
            ${details.Plot}
          </p>
        </div>
      </div>
    `;
  }

  renderMoviesDiv.innerHTML = innerHTML;
}

// Watchlist
let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

const watchlistDiv = document.getElementById("watchlist");

if (renderMoviesDiv) {
  renderMoviesDiv.addEventListener("click", (e) => {
    const btn = e.target.closest(".watchlist-btn");
    if (!btn) return;

    const movieId = btn.id;

    if (!watchlist.includes(movieId)) {
      watchlist.push(movieId);
      localStorage.setItem("watchlist", JSON.stringify(watchlist));
      renderWatchlist();
    }
  });
}

async function renderWatchlist() {
  const movies = await Promise.all(
    watchlist.map(async (id) => {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${APIKEY}&i=${id}`,
      );
      return await res.json();
    }),
  );

  let html = "";

  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];

    html += `
      <div class="movie">
        <img class="movie-img" src="${movie.Poster}" alt="" />

        <div class="movie-description">
          <h2>${movie.Title}</h2>

          <div class="movie-details">
            <p>${movie.Runtime}</p>
            <p>${movie.Genre}</p>
          </div>

          <p class="summary">
            ${movie.Plot}
          </p>
        </div>
      </div>
    `;
  }

  watchlistDiv.innerHTML = html;
}

if (watchlistDiv) {
  renderWatchlist();
}
