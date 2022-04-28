import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  // Função de validação do botão de login
  function buttonValidate() {
    const MIN_LENGTH = 6;
    const emailCheck = email.toLowerCase().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    // podemos verificar melhor isso aqui
    const passwordCheck = password.length > MIN_LENGTH;
    const bothChecks = emailCheck && passwordCheck;
    return bothChecks;
  }
  // Checking e-mail
  // Source: https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript

  // e-mail no localStorage:
  const handleLocalStorage = {
    email,
  };

  return (
    <form>
      <label htmlFor="email">
        E-mail
        <input
          data-testid="email-input"
          type="email"
          id="email"
          name="email"
          placeholder="Digite seu e-mail"
          value={ email }
          onChange={ ({ target }) => setEmail(target.value) }
        />
      </label>

      <label htmlFor="password">
        Senha
        <input
          data-testid="password-input"
          type="password"
          id="password"
          name="password"
          placeholder="Digite sua senha"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
        />
      </label>

      <button
        data-testid="login-submit-btn"
        type="submit"
        disabled={ !buttonValidate() }
        onClick={ () => {
          localStorage.setItem('mealsToken', 1);
          localStorage.setItem('cocktailsToken', 1);
          localStorage.setItem('user', JSON.stringify(handleLocalStorage));
          history.push('/foods');
        } }
      >
        Entrar
      </button>
    </form>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

// https://dev.to/cesareferrari/how-to-specify-the-shape-of-an-object-with-proptypes-3c56

export default Login;
