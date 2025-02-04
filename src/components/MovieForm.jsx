import { useEffect, useState } from 'react';
import { isValidTitle, isValidYear } from '../utils.js';

function MovieForm({ fetchMovies, editingMovie, updateMovie }) {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');

  // add state that will control the validity of the inputs
  const [validTitle, setValidTitle] = useState(false);
  const [validYear, setValidYear] = useState(false);
  const [validGenre, setValidGenre] = useState(false);


  const USER_ID = import.meta.env.VITE_USER_ID;

  // we will use the useEffect hook to trigger an action when the editingMovie state changes
  useEffect(() => {
    if (editingMovie) {
      setTitle(editingMovie.title);
      setYear(editingMovie.realease_year);
      setValidTitle(true);
      setValidYear(true);
    }
  }, [editingMovie]);

  // Requirements for inputs
  // title - not empty and more than 3 characters
  // rate - not empty string, it is not NaN isNaN() rate should be >= 1 and <= 10

  const handleTitleInput = (e) => {
    const value = e.target.value;
    setTitle(value);
    setValidTitle(isValidTitle(value));
  };

  const handleGenreInput = (e) => {
    const value = e.target.value;
    setGenre(value);
    setValidGenre(isValidTitle(value));
  };

  const handleYearInput = (e) => {
    const value = e.target.value;
    setYear(value);
    setValidYear(isValidYear(value));
  };

  const isFormValid = validTitle && validYear;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid) {
      console.log('The submission failed due to invalid inputs!');
      return;
    }

    const movieData = {
      user_id: USER_ID,
      title: title,
      release_year: year,
      genre: genre,
    };

    // if (editingMovie) {
    //   console.log('Update trigerred: ', movieData);
    //   updateMovie(movieData);
    // } else {
    //   console.log('New Movie Captured: ', movieData);
    //   addMovie(movieData);
    // }

    try {
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(movieData),
      };
      const response = await fetch('/api/movies', options);

      if (!response.ok) {
        throw new Error('Error: ' + response.status);
      }

      fetchMovies();
    } catch (e) {
      console.log(e);
    }

    // Reset the state
    setTitle('');
    setYear('');
    setGenre('');
    // Reset the state of input validations
    setValidYear(false);
    setValidTitle(false);
    setValidGenre(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="z-1 p-3 mt-5 border border-2 rounded-2 d-xl-flex gap-1 col-lg-6 col-md-11 col-11 neon-shadow"
    >
      <div className="col-xl-4 col-12 mb-1">
        <div className="form-floating">
          <input
            onChange={handleTitleInput}
            type="text"
            className={`form-control ${validTitle ? '' : 'is-invalid'}`}
            id="movie-title"
            placeholder="Movie Title"
            value={title}
          />
          <label htmlFor="movie-title">Movie Title</label>
        </div>
      </div>
      <div className="col-xl-3 col-12 mb-1">
        <div className="form-floating">
          <input
            onChange={handleGenreInput}
            type="text"
            className={`form-control ${validGenre ? '' : 'is-invalid'}`}
            id="movie-title"
            placeholder="Movie Title"
            value={genre}
          />
          <label htmlFor="movie-title">Movie Genre</label>
        </div>
      </div>
      <div className="col-xl-3 col-12 mb-1">
        <div className="form-floating">
          <input
            onChange={handleYearInput}
            type="number"
            className={`form-control ${validYear ? '' : 'is-invalid'}`}
            id="movie-rate"
            placeholder="Movie Title"
            value={year}
          />
          <label htmlFor="movie-rate">Year</label>
        </div>
      </div>
      <button
        id="submit-btn"
        type="submit"
        className="btn btn-warning btn-sm col-xl-2 col-12"
        disabled={!isFormValid}
      >
        {editingMovie ? 'Update' : 'Add'}
      </button>
    </form>
  );
}

export default MovieForm;