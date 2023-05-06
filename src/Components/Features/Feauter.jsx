import React from "react";

function Feauter({ title, description, video, image, driection, id }) {
  return (
    <div
      className={`relative mx-auto flex max-w-screen-lg items-center justify-center
    ${id % 2 !== 0 ? "sm:flex-row" : "sm:flex-row-reverse"}
  `}
    >
      <div className="mt-13 flex-1 tracking-wider">
        <h1 className="text-3xl sm:text-5xl text-center">{title}</h1>
        <h2 className="text-2xl text-center tracking-normal">{description}</h2>
      </div>
      <div className=" relative flex-1">
        <img className="z-10" src={`./images/${image}`} alt="" />
        <video loop autoPlay={true} className="absolute top-1 -z-10 sm:left-16 sm:w-96 sm:top-20" src={`./images/${video}`} />
      </div>
    </div>
  );
}

export default Feauter;
