import React from 'react';
import './App.scss';
import Home from './pages/home/home';

function App() {
  console.log(123);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello H2-CineBox</h1>
        <Home/>
      </header>
    </div>
  );
}

export default App;
