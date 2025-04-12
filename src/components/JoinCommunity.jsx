import React from 'react'

const inputClass = 'border border-zinc-300 p-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary'
const buttonClass = 'bg-black text-white p-2 rounded-r-lg hover:bg-zinc-800'

const JoinCommunity = () => {
  return (
    <div className="bg-yellow-400 p-8 text-center text-white">
      <h2 className="text-3xl font-extrabold mb-4">JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h2>
      <p className="text-lg mb-6">Type your email down below and be young wild generation</p>
      <div className="flex justify-center">
        <input type="email" placeholder="Add your email here" className={inputClass} />
        <button className={buttonClass}>SEND</button>
      </div>
    </div>
  )
}

export default JoinCommunity