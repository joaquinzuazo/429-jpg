import React from 'react'
import{ BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
