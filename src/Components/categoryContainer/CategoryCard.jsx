import React from 'react'
import { Link } from 'react-router-dom';

const CategoryCard = ({src,alt ,heading, pera, buttonText, navigateTo}) => {
  return (
    <div className="rounded-lg shadow-black shadow-lg hover:shadow-xl cursor-pointer hover:scale-[102%] hover:shadow-black transition flex flex-col">
      <div className="w-full aspect-[16/14] rounded-lg overflow-hidden">
        <img src={src} alt={alt}  className="rounded-lg cursor-pointer h-full hover:scale-110 transition w-full object-cover"/>
      </div>
      <div className="p-4 flex flex-col gap-4 grow">
         <h1 className="text-xl font-[500]">{heading}</h1>
         <p className="text-sm text-slate-600 grow">{pera}</p>
         <Link className="text-white bg-green-600 text-center font-[500] py-2 rounded-md hover:scale-95 transition">{buttonText}</Link>
      </div>
    </div>
  )
}

export default CategoryCard;