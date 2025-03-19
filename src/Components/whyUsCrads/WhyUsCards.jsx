import React from 'react'

const WhyUsCards = ({number, heading, pera}) => {
  return (
    <div className="flex flex-col gap-6 text-black">
      <span className="text-green-600 p-4 py-3 bg-white w-fit shadow-md font-bold">{number}</span>
      <h1 className="font-bold ">{heading}</h1>
      <p className="grow">{pera}</p>
    </div>
  )
}

export default WhyUsCards