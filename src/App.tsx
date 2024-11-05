import React from 'react';
import logo from './logo.svg';
import './App.css';
import Myasset from './components/myasset/myasset';
import Home from './components/home/home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <Myasset/> */}
      <Home/>
      </header>
    </div>
  );
}

export default App;
