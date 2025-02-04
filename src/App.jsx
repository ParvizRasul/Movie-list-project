import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import ThemeToggler from './components/ThemeToggler';

function App() {
  const [movies, setMovies] = useState([]);
  const USER_ID = 7;

  // we need to get the data from api and render on the screen
  const fetchMovies = async () => {
    try {
      const response = await fetch('/api/movies?user_id=' + USER_ID);
      const data = await response.json();
      console.log('Data Fetched: ', data);
      setMovies(data);
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect is hook that acts on some changes on dependancies that we specify
  useEffect(() => {
    fetchMovies();
  }, []);

  // set up the state for the editingMovie
  const [editingMovie, setEditingMovie] = useState(null);

  const addMovie = (newMovie) => {
    // We cannot mutate - the actual state (it is always immutable)
    // movies.push(newMovie);
    console.log('Adding the new movie.', newMovie);
    setMovies((prev) => [...prev, newMovie]);
  };

  const removeMovie = (id) => {
    // we are accessing movies directly
    // const filteredArray = movies.filter((movie) => {movie.id !== id});
    setMovies((prev) => prev.filter((movie) => movie.id !== id));
  };

  const editMovie = (movieToEdit) => {
    console.log('Captured Edit Movie: ', movieToEdit);
    setEditingMovie(movieToEdit);
  };

  const updateMovie = (updatedMovie) => {
    setMovies((prev) =>
      prev.map((movie) => (movie.id === updatedMovie.id ? updatedMovie : movie))
    );
    // todo - set the editingMovie to null
    setEditingMovie(null);
  };

  return (
    <>
      <Navbar>
        <ThemeToggler />
      </Navbar>
      <div className="d-flex justify-content-center">
        <MovieForm
          fetchMovies={fetchMovies}
          editingMovie={editingMovie}
          updateMovie={updateMovie}
        />
      </div>
      <MovieList
        movies={movies}
        editMovie={editMovie}
        removeMovie={removeMovie}
      />
    </>
  );
}

export default App;