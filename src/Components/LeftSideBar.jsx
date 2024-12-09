import React from 'react';

const LeftSidebar = () => {
  return (
    <div style={{ width: '250px', height: '100vh', backgroundColor: '#f5f5f5', position: 'fixed', left: 0, top: 0 }}>
      <ul>
        <li>Menu Item 1</li>
        <li>Menu Item 2</li>
        <li>Menu Item 3</li>
      </ul>
    </div>
  );
};

export default LeftSidebar;