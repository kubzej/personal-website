import React from 'react';
import MainTitle from './components/MainTitle/MainTitle';
import './App.css';
import SocialLinks from './components/SocialLinks/SocialLinks';

function App() {
  return (
    <div className='App'>
      <div id='about'>
        <MainTitle />
      </div>

      <div id='contact'>
        <SocialLinks />
      </div>
    </div>
  );
}

export default App;
