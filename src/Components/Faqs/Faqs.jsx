import React from 'react'
import faqs from '../../content/faq.json'
import Faq from './Faq'
function Faqs() {
  return (
    <div>
        <h1 className='text-5xl font-bold justify-center text-center py-3'>Frequently Asked Questions</h1>
        <div>
            {faqs.map(faq=>(
                <Faq key={faq.id} {...faq}/>
            ))}
        </div>
    </div>
  )
}

export default Faqs