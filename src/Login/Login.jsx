// Ce composant gère l'interface de connexion et d'inscription. Il utilise des états
// pour gérer l'affichage des champs de formulaire et les erreurs de validation.


import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [isLogin, setIsLogin] = useState(true); // Gère l'état entre login et inscription
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [rememberMe, setRememberMe] = useState(false); // Nouvel état pour la checkbox

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  }

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
    <div>
      <div className="login-container">
        <h2>{isLogin ? 'Se connecter' : 'S\'inscrire'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <span className="icon"><ion-icon name="mail"></ion-icon></span>
            <input
              type="email"
              id="email"
              placeholder=" "
              value={email}
              onChange={handleEmailChange}
              onKeyUp={validateFields}
              required={!isLogin} // L'email est obligatoire uniquement en mode inscription
            />
            <label>Email</label>
            {emailError && !isLogin && <span className="error-message">Email invalide</span>}
          </div>
          <div className="input-group">
            <span className="icon"><ion-icon name="lock-open"></ion-icon></span>
            <input
              type="password"
              id="password"
              placeholder=" "
              value={password}
              onChange={handlePasswordChange}
              onKeyUp={validateFields}
              required={!isLogin} // Le mot de passe est obligatoire uniquement en mode inscription
            />
            <label>Mot de passe</label>
            {passwordError && !isLogin && <span className="error-message">Le mot de passe doit contenir au moins un chiffre et un caractère spécial</span>}
          </div>
          {isLogin && (
            <div className="login-options">
              <div className="remember-me">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                />
                <label htmlFor="rememberMe">Se souvenir ?</label>
              </div>
                <a href="#" className='forgot-password'>Mot de passe oublié ?</a>
            </div>
          )}
          <button type="submit" className="submit-btn">
            {isLogin ? 'Se connecter' : 'S\'inscrire'}
          </button>
        </form>
        <div className="toggle-action">
          <p onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Pas encore membre ? S\'inscrire' : 'Déjà membre ? Se connecter'}
          </p>
        </div>
      </div>
      <div className="ellipse one"></div>
      <div className="ellipse two"></div>
      <div className="ellipse three"></div>
    </div>
  );
}

export default Login;