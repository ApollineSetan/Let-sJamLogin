import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [isLogin, setIsLogin] = useState(true); // Gère l'état entre login et inscription
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Regex pour validation de l'email et du mot de passe
  const emailRegex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
  const charDecimal = /\d/;
  const charSpecial = /[$&@!]/;

  const validateFields = () => {
    // Validation uniquement pour le formulaire d'inscription
    if (!isLogin) {
      const emailValid = emailRegex.test(email);
      const passwordValid = charDecimal.test(password) && charSpecial.test(password);

      setEmailError(!emailValid);
      setPasswordError(!passwordValid);

      return emailValid && passwordValid;
    }
    return true; // Si c'est un login, on ne fait pas de validation
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateFields()) {
      console.log('Formulaire soumis avec succès');
      // Ajoute ici l'action de soumission du formulaire (connexion/inscription)
    }
  };

  return (
    <div className="login-container">
      <h2>{isLogin ? 'Se connecter' : 'S\'inscrire'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            onKeyUp={validateFields}
            required={!isLogin} // L'email est obligatoire uniquement en mode inscription
          />
          {emailError && !isLogin && <span className="error-message">Email invalide</span>}
        </div>
        <div className="input-group">
          <input
            type="password"
            id="password"
            placeholder="Mot de passe"
            value={password}
            onChange={handlePasswordChange}
            onKeyUp={validateFields}
            required={!isLogin} // Le mot de passe est obligatoire uniquement en mode inscription
          />
          {passwordError && !isLogin && <span className="error-message">Le mot de passe doit contenir au moins un chiffre et un caractère spécial</span>}
        </div>
        <button type="submit" className="submit-btn">
          {isLogin ? 'Se connecter' : 'S\'inscrire'}
        </button>
      </form>
      <div className="toggle-action">
        <p onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Pas encore de compte ? S\'inscrire' : 'Déjà un compte ? Se connecter'}
        </p>
      </div>
    </div>
  );
}

export default Login;