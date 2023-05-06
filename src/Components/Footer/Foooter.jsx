import React from 'react'

function Foooter({link}) {
  return (
    <div className='mx-4 my-2 flex flex-col'>
        {link.map(links =>(
            <a href=""className='text-[#6c6c6c]'>{links}</a>
        ))}
    </div>
  )
}

export default Foooter