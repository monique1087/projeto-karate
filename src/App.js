import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Sobre from './components/Sobre'
import Contato from './components/Contato'


function App () {
  return ( 
    <Switch>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/sobre' component={Sobre} />
        <Route path='/contato' component={Contato} />
      </div>
    </Switch>
  )
}

export default App;
