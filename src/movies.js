const moviesList = document.querySelector('#movies-list');
const searchInput = document.querySelector('#keyword');
const baseURL = "http://www.omdbapi.com";

// Build a movie HTML li tag when given a movie object (the one currently
// coming from the OMBD API)
const buildMovieTag = movieObject => `<li class='list-inline-item'>
                                        <img src="${movieObject.Poster}" alt="${movieObject.Title}" />
                                      </li>`;

// Insert movie HTML tag in the page
const insertMovieHTML = movie => moviesList.insertAdjacentHTML('beforeEnd', buildMovieTag(movie));

// Fetches movies from OMDB when given a query (it will come from the user input
// when the form is submited, or by the default value that we set when the page
// loads)
const fetchMovies = (query) => {
  const queryURL = `${baseURL}/?s=${query}&apikey=adf1f2d7`;
  fetch(queryURL)
    .then(response => response.json())
    .then((data) => {
      const movies = data.Search;
      moviesList.innerHTML = '';
      movies.forEach(insertMovieHTML);
    });
};

// Defines the behaviour of the form
const formSubmit = (event) => {
  event.preventDefault();

  const query = searchInput.value;
  fetchMovies(query);
};

// Those two are the public interface of this file
export { formSubmit, fetchMovies };
