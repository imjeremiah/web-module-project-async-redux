import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';


import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      <h1>Random Poker Hand App</h1><br />
      <Cards />
    </div>
  );
}

export default App;