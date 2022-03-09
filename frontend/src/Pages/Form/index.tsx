import { Link } from "react-router-dom";
import "./style.css";

function Form() {
  const movie = {
    id: 1,
    image:
      "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
    title: "The Witcher",
    count: 2,
    score: 4.5,
  };

  return (
    <div className="reactmovie-form-container">
      <img
        className="reactmovie-movie-card-image"
        src={movie.image}
        alt="The Witcher"
      />
      <div className="reactmovie-card-bottom-container">
        <h3>"The Witcher"</h3>
        <form className="reactmovie-form">
          <div className="form-group reactmovie-form-group">
            <label htmlFor="email">Informe seu email</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group reactmovie-form-group">
            <label htmlFor="score">Informe sua avaliação</label>
            <select className="form-control" id="score">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="reactmovie-form-btn-container">
            <button type="submit" className="btn btn-primary reactmovie-btn">
              Salvar
            </button>
          </div>
        </form>
        <Link to="/">
          <button className="btn btn-primary reactmovie-btn mt-3">
            Cancelar
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Form;
