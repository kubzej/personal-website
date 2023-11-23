import React from 'react';
import Header from './components/Header/Header';
import MainTitle from './components/MainTitle/MainTitle';
import SubTitle from './components/SubTitle/SubTitle';
import './App.css';
import './components/Header/Header.css';
import HashtagRow from './components/HashtagRow/HashtagRow';

function App() {
  return (
    <div className='App'>
      <Header />
      <div id='about'>
        <MainTitle />
        <SubTitle text='Enthusiast with a passion for continuous learning and development. Holding strong values such as empathy and team spirit.' />
        <HashtagRow />
      </div>

      <div id='contact'></div>
    </div>
  );
}

export default App;
