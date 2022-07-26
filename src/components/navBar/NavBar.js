import CartWidget from './CartWidget.js';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
      <div className="collapse navbar-collapse " id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item px-2">
            <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
          </li>
          <li className="nav-item px-2">
            <Link className="nav-link active" aria-current="page" to="categorias">Categorias</Link>              </li>

          <li className="nav-item dropdown px-2">
            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Nosotros
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><Link className="dropdown-item" to="PregFrecuentes">Preguntas Frecuentes</Link></li>
              <li>
                <Link className="dropdown-item" to="ayuda">Ayuda</Link></li>
              <li>
                <Link className="dropdown-item" to="contacto">Contacto</Link>
              </li>
            </ul>
          </li>
          <CartWidget />
        </ul>
      </div>
    </nav>
  )
}
export default NavBar;