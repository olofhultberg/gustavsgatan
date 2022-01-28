//import logo from './logo.svg';
import React, { useState }  from 'react';

//import './App.css';
//Routing
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import Home from './views/Home'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {showSidebar ? (
          <button
            className='flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50'
            onClick={()=>setShowSidebar(!showSidebar)}          
          >X</button>
          )
        : (
          <svg
            onClick={() => setShowSidebar(!showSidebar)}
            className="fixed z-30 flex items-center cursor-pointer right-10 top-6"
            fill="#fff"
            viewBox="0 0 100 80"
            width="40"
            height="40"
          >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
          </svg>
          )
        }

      <div className={`top-0 right-0 w-[35vw] bg-blue-600  p-10 pl-20 text-white fixed h-full z-40 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"}`}>
        <Sidebar />
      </div>
      <Router>
        <Header/>
          <Routes>
            <Route path='/' element={<Home />}/>      
            
            <Route path='/*' element={<h2>Oops...</h2>}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
