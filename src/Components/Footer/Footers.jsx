import React from 'react'
import footer from'../../content/footerLinks.json'
import Foooter from './Foooter'
function Footers() {
  return (
    <div className='mt-10 mb-16 sm:mx-auto sm:max-w-screen-lg'>
       <h3 className='text-[#6c6c6c]'>Questions? Contact us.</h3>
       <div className='mx-10 grid grid-cols-2 sm:grid-cols-4'>
        {
           footer.columns.map((data)=>(
            <Foooter link={data}/>
           ))
        }
       </div>
       <p className='my-1 text-[#6c6c6c]'>Netflix in Somalia</p>

    </div>
  )
}

export default Footers