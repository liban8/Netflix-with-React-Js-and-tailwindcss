import React, { useEffect, useState } from 'react'
import axios from 'axios'
import requests from '../request'
import BASE_IMAGE_URL from '../constants'
import { AiFillInfoCircle, AiFillPlayCircle } from 'react-icons/ai'


function Banner() {
    const [treding, setTrending] = useState([])
    useEffect(()=>{
        const fetchNetflixOrginials = async()=>{
            // console.log(import.meta.env)
            const {data}  = await axios.get(requests.fetchNetflixOriginals)
            console.log(data)
            setTrending(
                data.results[Math.floor(Math.random()*data.results.length)]
                // data.results[Math.floor(Math.random () * data.results.length)]
            )
        }
        fetchNetflixOrginials()
    }, [])
    
  return (
    
    <div className='space-y-6 lg:h-[65vh] flex flex-col justify-end'>
        <div className='absolute top-0 left-0 -z-10 h-[90vh] w-screen'>
        <img src={`${BASE_IMAGE_URL + treding.backdrop_path || treding.poster_path }`} className='h-screen w-screen object-cover' alt="" />

        </div>
        <h1 className='text-5xl font-bold px-4'>{treding.title || treding.original_name || treding.name}</h1>
        <p className='text-sm max-w-xs px-4'>{treding.overview}</p>

        <div className='flex items-center space-x-2 mx-4 '>
            <button className='flex items-center round bg-white text-black px-5 py-1 text-xl transition
             hover:bg-gray-200 '>

        <AiFillPlayCircle/>
        Play
            </button>
            <button className='flex items-center round bg-[#5a7272] text-white px-5 py-1 text-xl'>

        <AiFillInfoCircle/>
        More Info
            </button>
        </div>
    </div>

    
  )
}

export default Banner