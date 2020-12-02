import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logoutRequest } from '../actions/index';
import gravatar from '../utils/gravatar';
import '../assets/styles/components/Header.scss';
import platziLogo from '../assets/img/logo-platzi-video-BW2.png';
import userIcon from '../assets/img/user-icon.png';

const Header = (props) => {
  const { user } = props;
  const isUser = Object.keys(user).length === 0;
  const deleteUserSession = () => {
    props.logoutRequest({});
  };

  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={platziLogo} alt='Platzi Video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img src={!isUser ? gravatar(user.email) : userIcon} alt='' />
          <p>Perfil</p>
        </div>
        <ul>
          <li>
            <a href='#cerrarSession'>{!isUser ? user.email : 'Desconocido'}</a>
          </li>
          <li>
            {!isUser ?
              (
                <Link to='/login' onClick={deleteUserSession}>
                  Cerrar Sesión
                </Link>
              ) :
              (
                <Link to='/login'>
                  Iniciar Sesión
                </Link>
              )}
          </li>
        </ul>
      </div>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const dispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, dispatchToProps)(Header);
