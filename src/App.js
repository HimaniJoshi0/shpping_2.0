import React from 'react'
import "./App.css"
import Cart from './pages/cart' 
import Home from './pages/home'
import Nav from './components/items/navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Nav/>
      <Router>
      <Routes>
      <Route  path="/" Component={Home}/>
      <Route path="/cart" Component={Cart}/>
      </Routes>
      
      </Router>
      
    </div>
  )
}

export default App
