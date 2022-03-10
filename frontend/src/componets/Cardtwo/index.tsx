import MovieScore from "componets/MovieScore";
import { Link } from "react-router-dom";

function Cardtwo() {
  
    const movie = {
        id: 2,
        image: "https://br.web.img2.acsta.net/r_1920_1080/pictures/19/08/29/09/19/5643742.jpg",
        title: "Coringa",
        count: 15,
        score: 5.0
    };

    return (
    <div>
      <img
        className="reactmovie-movie-card-image"
        src={movie.image}
        alt={movie.title}
      />
      <div className="reactmovie-card-bottom-container">
        <h3>{movie.title}</h3>
        <MovieScore />

        <Link to={`/form/${movie.id}`}>
        <div className="btn btn-primary reactmovie-btn">Avaliar</div>
        </Link>
      </div>
    </div>
  );
}

export default Cardtwo;
