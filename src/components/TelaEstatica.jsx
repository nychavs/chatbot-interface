import React from "react";
import Navbar from "./Navbar";
import Acessibilidade from "./Acessibilidade";
import Background from "./Background";
import Chat from "./Chat"
import AvilaSVG from "./AvilaSVG";

export default function TelaEstatica() {
  return (
    <>
      <div className="">
        <div className="flex place-content-around">
          <Navbar />
        </div>

        <div className="absolute bottom-0">
          <Background />
        </div>

        <div className="w-full flex  justify-center items-center">
          <Chat />
        </div>


        <div className="w-full absolute flex justify-end top-80">
          <AvilaSVG />
        </div>
        
        {/* <div className="absolute bottom-16 ">
          <Acessibilidade />
        </div> */}

      </div>
    </>
  );
}
