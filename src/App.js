import React from 'react';
import './App.css';
import Home from './components/Home'
import Sobre from './components/Sobre'
// import Contato from './components/Contato'
// import Essencial from './components/Essencial'

function App() {
  return (
    <div className="App">
        <Home />
        <Sobre />
        {/* <Contato /> */}
        {/* <Essencial /> */}
    </div>
  );
}

export default App;
