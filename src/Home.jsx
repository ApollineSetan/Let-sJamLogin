function Home() {
    return (
      <div className="home-page">
        {/* Barre de recherche centrée */}
        <header className="search-bar">
          {/* Bouton flèche retour */}
          <button className="back-button">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </button>
  
          {/* Barre de recherche */}
          <input type="text" placeholder="Rechercher..." />
  
          {/* Bouton notifications */}
          <button className="notification-button">
            <ion-icon name="notifications-outline"></ion-icon>
          </button>
        </header>
  
        {/* Sidebar gauche */}
        <aside className="sidebar left-sidebar">
          <div className="top-links">
            <ul>
              <li>Accueil</li>
              <li>Mon profil</li>
              <li>Messagerie</li>
              <li>Mon réseau</li>
              <li>Mes groupes</li>
              <li>Enregistrements</li>
            </ul>
          </div>
  
          <div className="bottom-links">
            <ul>
              <li>Paramètres</li>
              <li>Conditions générales</li>
              <li>Se déconnecter</li>
            </ul>
          </div>
        </aside>
  
        {/* Contenu principal */}
        <main className="main-content">
          <p>Ceci est le contenu principal de la page.</p>
        </main>
  
        {/* Sidebar droite */}
        <aside className="sidebar right-sidebar">
          <ul>
            <li>Messages</li>
            <li>Activités</li>
          </ul>
        </aside>
      </div>
    );
  }
  
  export default Home;