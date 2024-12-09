import React, { useState } from 'react';

const RightSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div style={{ width: collapsed ? '50px' : '250px', height: '100vh', backgroundColor: '#f5f5f5', position: 'fixed', right: 0, top: 0 }}>
      <button onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? '>' : '<'}
      </button>
      {!collapsed && <ul>
        <li>Option 1</li>
        <li>Option 2</li>
      </ul>}
    </div>
  );
};

export default RightSidebar;