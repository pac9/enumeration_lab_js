const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getListOfFilmTitles = function () {
  const arrayOfTitles = this.films.map((movie) => {
    return movie.title
  })

  return arrayOfTitles;
};

Cinema.prototype.getListOfFilmYear = function () {
  const arrayOfTitles = this.films.map((movie) => {
    return movie.year;
  })

  return arrayOfTitles;
};

Cinema.prototype.getFilmByTitle = function (title) {
  const getFilm = this.films.find((film) => {
    if (film.title === title){
      return film;
    }
  });

  return getFilm;
};

Cinema.prototype.getFilmByGenre = function (genre) {
  const getGenre = this.films.filter((film) => {
    if (film.genre === genre){
      return film;
    }
  });
  return getGenre;
};

Cinema.prototype.getFilmByYear = function (year) {
  const getYear = this.films.filter((film) => {
    if (film.year === year){
      return film;
    }
  });
  return getYear;
};

Cinema.prototype.hasFilmByYear = function (year) {
  const arrayOfYears = this.getListOfFilmYear();
  const result = arrayOfYears.includes(year);
  return result;
};

module.exports = Cinema;
