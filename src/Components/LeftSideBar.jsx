import React, { useState } from 'react';
import './LeftSideBar.css';
import { FaHome, FaUser, FaEnvelope, FaUsers, FaFile, FaCog, FaFileAlt, FaSignOutAlt } from 'react-icons/fa';
import { BiNetworkChart } from 'react-icons/bi';


const LeftSidebar = () => {
  const [activePage, setActivePage] = useState('accueil'); // Par défaut "accueil"

  // Liste des pages avec leurs noms et icônes
  const menuItems = [
    { name: 'accueil', label: 'Accueil', icon: <FaHome /> },
    { name: 'monProfil', label: 'Mon profil', icon: <FaUser /> },
    { name: 'messagerie', label: 'Messagerie', icon: <FaEnvelope /> },
    { name: 'monReseau', label: 'Mon réseau', icon: <BiNetworkChart /> },
    { name: 'mesGroupes', label: 'Mes groupes', icon: <FaUsers /> },
    { name: 'enregistrements', label: 'Enregistrements', icon: <FaFile /> },
  ];

  const settingsItems = [
    { name: 'parametres', label: 'Paramètres', icon: <FaCog /> },
    { name: 'conditions', label: 'Conditions générales', icon: <FaFileAlt /> },
    { name: 'deconnexion', label: 'Se déconnecter', icon: <FaSignOutAlt /> },
  ];

  return (
    <div className="sidebar">
      <div className="logo">
        {/* Ajoute ton logo ici */}
        <img src="images\logomusic-removebg-preview.png" alt="Logo" />
      </div>

      {/* Menu principal */}
      <div className="menu">
        {menuItems.map(item => (
          <div
            key={item.name}
            className={`menu-item ${activePage === item.name ? 'active' : ''}`}
            onClick={() => setActivePage(item.name)}
          >
            <span className="menu-icon">{item.icon}</span> {/* Icône à gauche */}
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      {/* Menu secondaire */}
      <div className="bottom-menu">
        {settingsItems.map(item => (
          <div
            key={item.name}
            className={`menu-item ${activePage === item.name ? 'active' : ''}`}
            onClick={() => setActivePage(item.name)}
          >
            <span className="menu-icon">{item.icon}</span> {/* Icône à gauche */}
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSidebar;
