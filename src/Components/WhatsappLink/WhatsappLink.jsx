import React from 'react'

function WhatsappLink() {

  function openWhatsapp(){
    var phoneNumber = "+917015010279"; 
    var url = "https://wa.me/918816000082";
    window.open(url,"_blank");
  }

  return (
    <button className="fixed right-10 z-50 font-bold bg-green-600 p-1 px-2 rounded-full hover:scale-95 transition shadow-md shadow-green-600" style={{top:"80%"}} onClick={openWhatsapp}>
      <i className="fa-brands fa-whatsapp text-4xl"></i>
    </button>
  )
}

export default WhatsappLink;