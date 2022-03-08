import {ReactComponent as GithubIcon} from 'assents/img/github.svg';
import './style.css';

function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="reactmovie-nav-content">
          <h1>ReactMovie</h1>
          <a
            href="https://github.com/CaGuimas"
            target="_blank"
            rel="noreferrer"
          >
            <div className="reactmovie-contact-container">
              <GithubIcon />
              <p className="reactmovie-contact-link">/CaGuimas</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
