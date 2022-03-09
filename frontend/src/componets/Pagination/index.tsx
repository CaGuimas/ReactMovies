import { ReactComponent as Arrow } from 'assents/img/arrow.svg';
import './style.css';

function Pagination() {
  return (
    <div className="reactmovie-pagination-container">
      <div className="reactmovie-pagination-box">
        <button className="reactmovie-pagination-button" disabled={true}>
          <Arrow />
        </button>
        <p>{`${1} de ${3}`}</p>
        <button className="reactmovie-pagination-button" disabled={false}>
          <Arrow className="reactmovie-flip-horizontal" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;