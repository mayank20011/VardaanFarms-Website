import React from 'react'

const Header = () =>{
  
  function openFb(){
    window.open("https://www.facebook.com/vardaanfarms/");
  }

  function openIg(){
    window.open("https://www.instagram.com/vardaanfarms/");
  }

  function openLinkedin(){
    window.open("");
  }

  function openYt(){
    window.open("https://www.youtube.com/@VardaanFarms");
  }

  return (
    <div className="bg-neutral-700 py-4 text-white hidden md:flex fixed w-full z-50" id="header">
      
      <div className="flex justify-between mx-auto max-w-[1400px] lg:w-3/4 md:w-11/12">

       <div className="flex gap-4 text-sm">
         <div className="flex gap-2 items-center">
          <i className="fa-solid fa-envelope text-green-600"></i>
          <p>hello@vardaanfarms.com</p>
         </div>
         <div className="flex gap-1 items-center">
          <i className="fa-solid fa-phone text-green-600"></i>
          <p>+91 8816000082</p>
         </div>
       </div>

       <div className="flex gap-4 text-sm">
         <div className="flex gap-2 items-center border-r-2 pr-6">
          <i className="fa-solid fa-clock text-green-600"></i>
          <p>08:00 am - 6:00 pm</p>
         </div>
         <div className="flex gap-4 items-center">
          <i className="fa-brands fa-facebook-f cursor-pointer transition duration-700 hover:text-green-600" onClick={openFb}></i>
          <i className="fa-brands fa-instagram cursor-pointer transition duration-700 hover:text-green-600" onClick={openIg}></i>
          <i className="fa-brands fa-linkedin-in cursor-pointer transition duration-700 hover:text-green-600" onClick={openLinkedin}></i>
          <i className="fa-brands fa-youtube cursor-pointer transition duration-700 hover:text-green-600" onClick={openYt}></i>
         </div>
       </div>

      </div>
    </div>
  )
}

export default Header