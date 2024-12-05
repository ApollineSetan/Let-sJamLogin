function Home() {
    return (
      <div className="home-page">
        {/* Barre de recherche centrée */}
        <header className="search-bar">
          {/* Bouton flèche retour */}
          <button className="back-button">
          <ion-icon name="chevron-back-outline"></ion-icon>
          </button>
  
          {/* Barre de recherche */}
          <input type="text" placeholder="Rechercher" />
  
          {/* Bouton notifications */}
          <button className="notification-button">
            <ion-icon name="notifications-outline"></ion-icon>
          </button>
        </header>
  
        {/* Sidebar gauche */}
        <aside className="sidebar left-sidebar">
          <div class="logo"><img class="imagelogo" src="logomusic-removebg-preview.png"></img></div>
          <div className="top-links">
            <ul>
              <li><ion-icon name="home-outline"></ion-icon> Accueil</li>
              <li><ion-icon name="person-outline"></ion-icon> Mon profil</li>
              <li><ion-icon name="mail-outline"></ion-icon> Messagerie</li>
              <li><ion-icon name="git-network-outline"></ion-icon> Mon réseau</li>
              <li><ion-icon name="people-outline"></ion-icon> Mes groupes</li>
              <li><ion-icon name="bookmarks-outline"></ion-icon> Enregistrements</li>
            </ul>
          </div>
  
          <div className="bottom-links">
            <ul>
              <li><ion-icon name="settings-outline"></ion-icon> Paramètres</li>
              <li><ion-icon name="reader-outline"></ion-icon> Conditions générales</li>
              <li><ion-icon name="power-outline"></ion-icon> Se déconnecter</li>
            </ul>
          </div>
        </aside>
  
        {/* Contenu principal */}
        {/* <main className="main-content">
          <p> </p>
        </main> */}
  
        {/* Sidebar droite */}
        <aside className="sidebar right-sidebar">
          <ul>
            <li>Messages</li>
            <li>Activités</li>
          </ul>
        </aside>
        <div className ="premierGroupe">
          <div className="ellipseone"></div>
          <div className="ellipsetwo"></div>
          <div className="ellipsethree"></div>
          <div className="ellipsefour"></div>
          <div className="ellipsefive"></div>
        </div>
        <div className ="deuxiemeGroupe">
          <div className="ellipsesix"></div>
          <div className="ellipseseven"></div>
          <div className="ellipseeight"></div>
          <div className="ellipsenine"></div>
          <div className="ellipseten"></div>
        </div>
      </div>
    );
  }
  
  export default Home;