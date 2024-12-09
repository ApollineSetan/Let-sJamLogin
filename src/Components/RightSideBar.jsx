import React, { useState } from 'react';
import './RightSideBar.css';

const RightSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="rightside">
      {!collapsed && <ul>
        {/* <li>Option 1</li>
        <li>Option 2</li> */}
      </ul>}
    </div>
  );
};

export default RightSidebar;