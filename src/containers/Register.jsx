import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUserData } from '../actions/index';
import '../assets/styles/components/Register.scss';
import Header from '../components/Header';

const Register = (props) => {
  const [form, setForm] = useState({ email: '', name: '', password: '' });
  const handleInputs = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleInputRegister = (event) => {
    event.preventDefault();
    props.setUserData(form);
    props.history.push('/');
  };

  return (
    <>
      <Header isRegister />
      <section className='register'>
        <section className='register__container'>
          <h2>Regístrate</h2>
          <form className='register__container--form' onSubmit={handleInputRegister}>
            <input name='name' className='input' type='text' placeholder='Nombre' onChange={handleInputs} />
            <input name='email' className='input' type='text' placeholder='Correo' onChange={handleInputs} />
            <input name='password' className='input' type='password' placeholder='Contraseña' onChange={handleInputs} />
            <button type='submit' className='button'>Registrarme</button>
          </form>
          <Link to='/login'>
            Iniciar sesión
          </Link>
        </section>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  setUserData,
};

export default connect(null, mapDispatchToProps)(Register);
