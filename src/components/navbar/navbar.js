import './navbar.css';
import cvicon from './download.svg';
import logo from './logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#inicio" className="navbar-logo">
        <img src={logo} alt="Logo" className='navbar-logo' />
      </a>
      <div className="navbar-pages">
        <a href="#sobremi" className="navbar-link">A cerca de mi</a>
        <a href="#habilidades" className="navbar-link">Habilidades</a>
        <a href="#proyectos" className="navbar-link">Portafolio</a>
        <a href="#contacto" className="navbar-link">Contacto</a>
      </div>
      <div className="navbar-cv_button">
        <a href="https://drive.google.com/file/d/1g0J6k5z8F7G9K5J6K5J6K5J6K5J6K5/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="navbar-cv_link">
        <img src={cvicon} alt="CVIcon" className="navbar-cv_icon" />
        Descargar CV
        </a>
      </div>
    </nav>
  );
}

export default Navbar;


