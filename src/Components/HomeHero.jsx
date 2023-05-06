import React from "react";
import { Link } from "react-router-dom";
function HomeHero() {
  return (
    <div
      className="flex min-h-screen flex-col items-center"
      style={{
        backgroundImage: `linear-gradient(rgb( 0 0 0/60%), rgb(0 0 0/60%)), url(./images/misc/home.jpeg)`,
      }}
    >
      <header className="flex w-full justify-between ">
        <div className="my-6 mx-8">
          <Link to="/">
            <img className="w-32" src="../images/logo/logo.svg" alt="" />
          </Link>
        </div>
        <div className="my-6 mx-8">
          <Link
            className="rounded bg-[#e50a14] py-2 px-8 text-white"
            to="/singup"
          >
            Sing up
          </Link>
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center text-center text-white sm:px-20 ">
        <h1 className="text-5xl font-bold tracking-wide text-white">
          Unlimited movies, TV shows, and more.
        </h1>
        <h2 className="mt-5 text-3xl">Plans now start at USD2.99/month.</h2>
        <p className="mt-5 text-lg">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="m-4 flex flex-col space-y-6 sm:flex-row sm:space-y-0">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="w-full min-w-[400px] py-2 px-4 text-black outline-none"
          />
          <button className="flex w-full items-center justify-center bg-[#e50a14] py-2 px-3 text-xl">
            Get Started
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
      </main>
    </div>
  );
}

export default HomeHero;
