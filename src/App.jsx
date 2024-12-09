import React from 'react';
import LeftSideBar from './Components/LeftSideBar';
import RightSideBar from './Components/RightSideBar';
import TopBar from './Components/TopBar';
import ProfileDemos from './Components/ProfileDemos';
import Login from './Login/Login';

function App() {
  return (
    <div className="App">
      <LeftSideBar />
      <RightSideBar />
      <TopBar />
      <ProfileDemos />
      <Login />
    </div>
  );
}

export default App;
