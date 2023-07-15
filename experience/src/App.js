import React, { useEffect ,useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Experiences from './components/Experiences';
import Card from './components/Card';
import Update from './components/Update';
import Home from './components/Home';

function App() {

  return (

    <div className="App">
  <Router>
     <Routes>        
        <Route path="/write" element={<Experiences/>}/>
        <Route path="/experiences" element={<Card/>}/>
        <Route path="/" element={<Home/>}/>
        
        <Route path="experiences/:id" element={<Update/>}/>
    </Routes>

   </Router>
      </div>
  );
}

export default App;
