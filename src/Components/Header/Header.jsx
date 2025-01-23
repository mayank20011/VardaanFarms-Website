import React from 'react'

function Header() {
  return (
    // for header
    <div className="bg-neutral-700 py-4 text-white hidden md:flex">
      
      {/* To Contain Everything of header */}
      <div className="flex justify-between mx-auto max-w-[1400px] lg:w-3/4 md:w-11/12">

       {/* For email and number  */}
       <div className="flex gap-4">
        {/* for email */}
         <div className="flex gap-2 items-center">
          <i className="fa-solid fa-envelope text-green-600"></i>
          <p>hello@vardaanfarms.com</p>
         </div>
         {/* for phone Number */}
         <div className="flex gap-1 items-center">
          <i className="fa-solid fa-phone text-green-600"></i>
          <p>+91 8816000082</p>
         </div>
       </div>

       {/* For time and links */}
       <div className="flex gap-4">
        {/* for email */}
         <div className="flex gap-2 items-center border-r-2 pr-6">
          <i className="fa-solid fa-clock text-green-600"></i>
          <p>08:00 am - 6:00 pm</p>
         </div>
         {/* for phone Number */}
         <div className="flex gap-4 items-center">
          {/* insta fb linkedin */}
          <i className="fa-brands fa-facebook-f cursor-pointer transition duration-700 hover:text-green-600"></i>
          <i className="fa-brands fa-instagram cursor-pointer transition duration-700 hover:text-green-600"></i>
          <i className="fa-brands fa-linkedin-in cursor-pointer transition duration-700 hover:text-green-600"></i>
          <i className="fa-brands fa-youtube cursor-pointer transition duration-700 hover:text-green-600"></i>
         </div>
       </div>

      </div>
    </div>
  )
}

export default Header