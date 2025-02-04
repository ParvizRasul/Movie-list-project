import { FaTrashCan } from 'react-icons/fa6';
import { FiEdit3 } from 'react-icons/fi';

function MovieCard({ movie, editMovie, removeMovie }) {
  return (


    <div className="col-11 col-lg-5">
      <div className="card bg-bone-white text-dark position-relative">
        <span className="position-absolute translate-middle badge bg-success custom-badge-position">
          {movie.release_year}
        </span>

        <div className="card-body d-flex justify-content-between">
          <h3 className="card-title m-0">{movie.title}</h3>

          <div>
            <button
              onClick={() => editMovie(movie)}
              className="text-danger btn"
            >
              <FiEdit3 size={'1.2rem'} />
            </button>
            <button
              onClick={() => removeMovie(movie.id)}
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