import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Builder from './pages/builder';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Builder /> } />
      </Routes>
    </Router>
  )
}

export default App
