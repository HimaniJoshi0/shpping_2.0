import React from 'react'
import "./App.css"
import Cart from './pages/cart' 
import Home from './pages/home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/auth/login';
import Signup from './pages/auth/sign-up';

const App = () => {
  return (
    <div>
      <Router>
      <Routes>
      <Route  path="/" Component={Login}/>
      <Route path="/signup" Component={Signup}/>
      <Route  path="/home" Component={Home}/>
      <Route path="/cart" Component={Cart}/>
      </Routes>
      
      </Router>
  
      
    </div>
  )
}

export default App
