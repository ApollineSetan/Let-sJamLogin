import React from 'react';
// import LeftSideBar from './Components/LeftSideBar';
// import RightSideBar from './Components/RightSideBar';
// import TopBar from './Components/TopBar';
// import ProfileDemos from './Components/ProfileDemos';
import Login from './Login/Login';

function App() {
  return (
    <div className="App">
      {/* <LeftSideBar />
      <RightSideBar />
      <TopBar />
      <ProfileDemos /> */}
      <Login />
    </div>
  );
}

export default App;


// C'est le composant principal de l'application qui organise plusieurs autres composants 
// (LeftSideBar, RightSideBar, TopBar, etc.) ainsi que le composant de connexion (Login).