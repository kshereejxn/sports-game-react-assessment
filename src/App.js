import React from 'react';
import './App.css';
import Game from './components/game/Game';
import Veggies from './assets/veggie.gif';
import Fruits from './assets/fruit.gif';
import Tigers from './assets/2bball.gif';
import Panthers from './assets/bball1.gif';



function App() {
  const veggie = {
    name: 'Vengeful Veggies',
    logoSrc: Veggies
  }

  const fruits = {
    name: 'Fearless Fruitful',
    logoSrc: Fruits
  }

  const shirts = {
    name: 'Tommy Tigers',
    logoSrc: Tigers
  }

  const skins = {
    name: 'Pauly Panthers',
    logoSrc: Panthers
  }
  return (
    <div className="App">
      <Game
        venue="K Sheree Stadium"
        homeTeam={veggie}
        visitingTeam={fruits}
      />
      <Game
        venue="Fire-Ball Arena"
        homeTeam={shirts}
        visitingTeam={skins}
      />
    </div>
  )
}

export default App;
