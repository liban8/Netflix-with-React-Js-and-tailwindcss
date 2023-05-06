import React, { useState } from 'react'
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";

function Faq({id, title, description}) {
    const [open, setopen] =useState(false)

  return (
    <div className='flex-col mx-auto py2 px-2 sm:max-w-screen-md '>
       <div className='flex justify-between py-4 bg-[#303030] px-4 my-2'>
       <h1 className='flex text-2xl cursor-pointer' onClick={()=>setopen(!open)}>{title}</h1>
      {
        open ? <AiOutlineClose onClick={()=>setopen(!open)} className="w-8 h-8" /> : <AiOutlinePlus onClick={()=>setopen(!open)} className="w-8 h-8" />
      }
       </div>
       <div>
        {open &&         <p className='sm:py-4 px-2 text-2xl bg-[#303030]'>{description}</p>}

       </div>
    </div>
  )
}

export default Faq