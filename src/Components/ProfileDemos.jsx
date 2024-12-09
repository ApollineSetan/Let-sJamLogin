import React from 'react';
import './ProfileDemos.css';

const ProfileDemos = () => {
  return (
    <div style={{ padding: '20px', marginTop: '60px' }}>
      {/* <h1>Nom d'utilisateur</h1>
      <p>Email : utilisateur@example.com</p>
      <p>Autres informations...</p> */}

      <div className="premierGroupe">
        <div className="ellipseone"></div>
        <div className="ellipsetwo"></div>
        <div className="ellipsethree"></div>
        <div className="ellipsefour"></div>
        <div className="ellipsefive"></div>
      </div>

      <div className="deuxiemeGroupe">
        <div className="ellipsesix"></div>
        <div className="ellipseseven"></div>
        <div className="ellipseeight"></div>
        <div className="ellipsenine"></div>
        <div className="ellipseten"></div>
      </div>
    </div>
)};

export default ProfileDemos;