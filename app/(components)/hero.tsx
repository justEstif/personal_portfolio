import React from "react";
import BackgroundCircles from "./backgroundCircles";
import Typewriter from "./typewriter";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="flex overflow-hidden flex-col justify-center items-center space-y-8 h-screen text-center">
      <BackgroundCircles />
      <Typewriter />
    </div>
  );
}

export default Hero;
