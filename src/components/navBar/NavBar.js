import CartWidget from './CartWidget.js';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-5">
      <div class="collapse navbar-collapse " id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item px-2">
            <Link class="nav-link active" aria-current="page" to="/">Inicio</Link>
          </li>
          <li class="nav-item px-2">
            <Link class="nav-link active" aria-current="page" to="categorias">Categorias</Link>              </li>

          <li class="nav-item dropdown px-2">
            <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Nosotros
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><Link class="dropdown-item" to="PregFrecuentes">Preguntas Frecuentes</Link></li>
              <li>
                <Link class="dropdown-item" to="ayuda">Ayuda</Link></li>
              <li>
                <Link class="dropdown-item" to="contacto">Contacto</Link>
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