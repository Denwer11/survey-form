import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div class="container">
      <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <span class="fs-2 text-success">Survey form</span>
        </a>

        <ul class="nav nav-pills">
          <li class="nav-item">
            <Link to="/" class="nav-link text-success" aria-current="page">
              Главная
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/about" class="nav-link text-success">
              О нас
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
