
import { FaTrashCan } from 'react-icons/fa6';
import { FiEdit3 } from 'react-icons/fi';

function MovieCard({ movie, editMovie, fetchMovies }) {
  const USER_ID = import.meta.env.VITE_USER_ID;

  const handleDelete = async () => {
    console.log('Deleting the movie througth api')
    try {
      const response = await fetch(`/api/movies/${movie.id}?user_id=${USER_ID}`, {
        method: 'DELETE'
      });
      
      if(!response.ok){
        throw new Error(`Error deleting the movie: ${movie.id}`);
      }

      console.log('Fetching the movies')
      fetchMovies();

    } catch (e) {
      console.log(e)
    }
  }
  
  
  return (
    <div className="col-11 col-lg-5">
      <div className="card bg-bone-white text-dark position-relative">
        <span className="position-absolute translate-middle badge bg-success custom-badge-position">
          {movie.release_year}
        </span>

        <div className="card-body d-flex justify-content-between">
          <h3 className="card-title m-0">{movie.title} - <span className='fw-light fs-4 text-secondary'>{movie.genre}</span></h3>

          <div>
            <button
              onClick={() => editMovie(movie)}
              className="text-danger btn"
            >
              <FiEdit3 size={'1.2rem'} />
            </button>
            <button
              onClick={() => handleDelete(movie.id)}
              className="text-danger btn"
            >
              <FaTrashCan />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;