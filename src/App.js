import { BrowserRouter, Route, Routes, useSearchParams } from 'react-router-dom';

import Navbar from './Nav.js/Navbar';
import './Project.css';
import Login from './Nav.js/Login';
import Singup from './Nav.js/Singup';

import Pro from "./Nav.js/Pro"
import { useState } from 'react';
import Product from './Product';

function App() {
  const [filt, setfilt] = useState("")
  function filter(a){
    console.log(a,"inside app a");
    setfilt(a)
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar data={filter}/>
      <Routes>
        <Route path='/' element = {<Pro data={filt}/>} />
        <Route path='/product' element = {<Product/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Singup' element = {<Singup/>} />
        
      </Routes>
      </BrowserRouter>
     
      {/* <Pro data={filt}/> */}
     
    </div>
  );
}

export default App;
