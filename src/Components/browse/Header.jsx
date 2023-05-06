import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {AiFillBell,} from 'react-icons/ai'
import {BsSearch,} from 'react-icons/bs'
function Header() {
  const [isScrolled, setisScrolled]= useState(false)

  useEffect(()=>{
    const handleScrolled = () =>{
      if(window.scrollY  >0 ){
        setisScrolled(true)
      }
      else {
        setisScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScrolled);
    return ()=>removeEventListener("scroll", handleScrolled)
  },[])
  return (
    <div className={`${isScrolled && "bg-[#141414]"}  fixed flex z-50 top-0   justify-between w-full p-4 items-center`}>
      <div className='flex justify-center items-center gap-9'>
        <Link to="/browser">
            <img className="w-32 " src="../images/logo/logo.svg" alt="" />
          </Link>
        <Link to='/browser' className='Link-Style'>Home</Link>
        <Link to='/TvShows' className='Link-Style'>Tv Shows</Link>
        <Link to='/browser' className='Link-Style'>Latest</Link>
        <Link to='/browser' className='Link-Style'>MY Lists</Link>
      </div>

          
          <div className=' flex space-x-4 text-sm items-center'>
          <AiFillBell className='h-6 w-6'/>
          <BsSearch className='h-6 w-6' />
          <img src="../images/logo/profile.png" className='w-[40px] cursor-pointer rounded'/>
          </div>
    </div>
  )
}

export default Header

