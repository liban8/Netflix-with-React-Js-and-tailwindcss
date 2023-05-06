import React from 'react'

function Subsribe() {
  return (
    <div className='mx-auto sm:max-w-screen-md py-4 items-center justify-center'>
        <p className='w-full text-center text-2xl '>Ready to watch? Enter your email to create or restart your membership.</p>
         <div className="m-4 flex flex-col sm:max-w-md justify-center mx-32 space-y-6 sm:flex-row sm:space-y-0">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="w-full min-w-[400px] py-2 px-4 text-black outline-none"
          />
          <button className="flex mx-auto sm:max-w-md items-center justify-center bg-[#e50a14] py-2 px-3 text-xl">
            Subscribe
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
    </div>
  )
}

export default Subsribe