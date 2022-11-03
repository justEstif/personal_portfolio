import Image from "next/image";
import React from "react";
import BackgroundCircles from "./backgroundCircles";
import Typewriter from "./typewriter";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="flex overflow-hidden flex-col justify-center items-center space-y-8 h-screen text-center">
      <BackgroundCircles />
      <Image
        src={"https://api.lorem.space/image/movie?w=500&h=500"}
        alt="Picture of Estifanos"
        width={500}
        height={500}
        className="object-cover relative mx-auto w-32 h-32 rounded-full"
      />
      <div className="z-20">
        <h2 className="pb-2 text-sm text-gray-500 uppercase tracking-[15px]">
          Software Engineer
        </h2>
        <Typewriter />

        <div className="pt-5 space-x-3">
          {/* TODO: Use Link instead of a tab */}
          <a href="#about" className="hero-link">
            About
          </a>
          <a href="#experience" className="hero-link">
            Experience
          </a>
          <a href="#skills" className="hero-link">
            Skills
          </a>
          <a href="#projects" className="hero-link">
            Projects
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
