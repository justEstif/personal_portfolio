import Image from "next/image";
import Link from "next/link";
import React from "react";
import BackgroundCircles from "./backgroundCircles";
import Typewriter from "./typewriter";

type Props = {};

function Hero({ }: Props) {
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
          <Link href="#about">
            <button className="hero-btn">About</button>
          </Link>
          <Link href="#experience">
            <button className="hero-btn">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="hero-btn">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="hero-btn">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
