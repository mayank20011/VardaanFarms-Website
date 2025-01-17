import React from 'react'
import Header from './Components/Header/Header.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Body from "./Components/Body/Body.jsx";

function App() {
  return (
    <div className="bg-black text-white">
      <Header/>
      <Navbar/>
      <Body/>
    </div>
  )
}

export default App