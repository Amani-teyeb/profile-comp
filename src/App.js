import React from 'react';
import ProfilPhoto from './Component/Profile/ProfilPhoto.js';
import FullName from './Component/Profile/FullName.js';
import Adresse from './Component/Profile/Adresse.js';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <ProfilPhoto/>
      <FullName/>
      <Adresse/>
      
    </div>
  );
}

export default App;
