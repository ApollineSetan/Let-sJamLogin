import React from 'react';

const TopBar = () => {
  return (
    <div style={{ width: '100%', height: '50px', backgroundColor: '#ccc', position: 'fixed', top: 0, left: 0, right: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 10px' }}>
      <button>Retour</button>
      <input type="text" placeholder="Rechercher..." style={{ width: '50%' }} />
      <button>Notifications</button>
    </div>
  );
};

export default TopBar;