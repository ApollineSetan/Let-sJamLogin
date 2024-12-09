import React from 'react';
import './TopBar.css'; // Assure-toi d'importer le fichier CSS

const TopBar = () => {
  return (
    <div className="topbar">
      <button>R</button>
      <input type="text" placeholder="Rechercher..." />
      <button>N</button>
    </div>
  );
};

export default TopBar;