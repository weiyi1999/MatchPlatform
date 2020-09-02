import React from 'react';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className="item1">Match Platform</div>
        <div className="item2">Sign In</div>
        <div className="item3">Sign Up</div>
      </header>
      <main className="App-body">
        <div className="left-item"  style={{backgroundColor: "red"}}>left</div>
        <div className="right-item" style={{backgroundColor: "blue"}}>right</div>
      </main>
      <footer className="App-footer">
        Weiyi 2020
      </footer>
    </div>
  );
}

export default App;
