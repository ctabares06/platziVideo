import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import platziLogo from '../assets/img/logo-platzi-video-BW2.png';
import userIcon from '../assets/img/user-icon.png';

const Header = () => {
  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={platziLogo} alt='Platzi Video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img src={userIcon} alt='' />
          <p>Perfil</p>
        </div>
        <ul>
          <li>
            <a href='/'>
              Cuenta
            </a>
          </li>
          <li>
            <Link to='/login'>
              Cerrar Sesión
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
