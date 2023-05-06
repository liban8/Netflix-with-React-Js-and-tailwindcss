import React from 'react'
import features from '../../content/features.json'
import Feauter from './Feauter'
function Features() {
  return (
    <div className='relative '>
        {
            features.map((feature)=>(
             <Feauter key={feature.id}{...feature}/>
            ))
        }
    </div>
  )
}

export default Features