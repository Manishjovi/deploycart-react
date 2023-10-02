import React from 'react';
import { HashRouter , Route } from 'react-router-dom';
import Header from './header.js';
import Login from './login.js';
import Home from './home.js';
import Register from './register.js';
import Mycart from './cart.js';
import Dashboard from './dashboard.js';
import Myproduct from './myproduct.js';



function App() {
  return (
    <HashRouter>
        <Header/>

        <Route exact path='/' component={Home}/>
        <Route exact path='/dashboard' component={Dashboard}/>
        <Route exact path='/myproduct' component={Myproduct}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/cart' component={Mycart}/>
    </HashRouter>
  );
}

export default App;
