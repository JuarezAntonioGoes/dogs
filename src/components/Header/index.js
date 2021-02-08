import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as DogLogo } from "../../assets/dogs.svg";
import style from "./style.module.css";

export const Header = () => {
  return (
    <header className={style.header}>
      <nav className={`container ${style.nav}`}>
        <ul>
          <li>
            <Link to="/">
              <DogLogo className={style.DogLogo} />
            </Link>
          </li>
          <li>
            <Link className={style.loginCadastro} to="/login">
              Login / Cadastro
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
