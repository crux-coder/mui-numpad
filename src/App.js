import React from 'react';
import './App.css';
import MuiNumpad from './components/MuiNumpad';
import Main from './Main';

function App() {
  return (
    <Main>
      <div className="App">
        <header className="App-header">
          <MuiNumpad />
        </header>
      </div>
    </Main>
  );
}

export default App;
