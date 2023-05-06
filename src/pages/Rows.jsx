import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import BASE_IMAGE_URL from "../constants";

function Rows({ title, url }) {
  const [movies, setMovies] = useState([]);
  const [itScroll, setItScroll] = useState(false);
  const rowRef = useRef(null);
  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await axios.get(url);
      setMovies(data.results);
    };
    fetchMovies();
  }, []);
  const handleclik = (direction) => {
    setItScroll(true);

    if (rowRef.current) {
      const { clientWidth, scrollLeft } = rowRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
        rowRef.current.scrollTo({left: scrollTo, behavior: "smooth"})
    // useRef.current.scrollTo({left: scrollTo, behavior:"smoth"})
    
    }
  };
  return (
    <div className="h-40 ">
      <h1 className="text-lg font-semibold">{title}</h1>
      <div
        className="group relative  overflow-scroll scrollbar-hide md:ml-2"
        ref={rowRef}
      >
        <BsChevronLeft
          className={`${!itScroll && "hidden"} group absolute top-0 left-2
            z-50 m-auto mt-12 h-9 w-9 items-center opacity-0 
            hover:scale-100 group-hover:opacity-100 `}
          onClick={() => handleclik("left")}
        />
        <div className="flex items-center space-x-0 md:space-x-2 md:p-2 ">
          {movies &&
            movies.map((movie) => (
              <div className="relative h-64 min-w-[200px]">
                <img
                  src={
                    BASE_IMAGE_URL + movie.backdrop_path || movie.poster_path
                  }
                  alt=""
                  className="object-cover hover:scale-110"
                />
              </div>
            ))}
        </div>
        <BsChevronRight
          className="group absolute top-0 right-2
            z-10 m-auto mt-12 h-9 w-9 items-center opacity-0 
            hover:scale-100 group-hover:opacity-100"
          onClick={() => handleclik("right")}
        />
      </div>
    </div>
  );
}

export default Rows;
