import MovieStars from "componets/MovieStars";
import './style.css'

function MovieScore() {
  
    const score= 3.5
    const count= 13
    
    return (


    <div className="reactmovie-score-container">
      <p className="reactmovie-score-value">
        {score > 0 ? score.toFixed(1) : "-"}
      </p>
      <MovieStars />
      <p className="reactmovie-score-count">{count} avaliações</p>
    </div>
  );
}

export default MovieScore;