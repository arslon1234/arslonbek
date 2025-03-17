"use client";
import Image from "next/image";
import React from "react";
import me from "@/assets/me.png";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { PiTelegramLogo } from "react-icons/pi";
import { TbBrandLeetcode } from "react-icons/tb";
function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <section className="w-full flex justify-center gap-5 flex-col items-center bg-[#F6F6F6] rounded-3xl py-9 px-4 md:px-8 lg:px-16">
      <div
        data-aos="zoom-in"
        className="w-[180px] h-[180px] md:w-[240px] md:h-[240px] rounded-[50%] bg-main flex items-center justify-center"
      >
        <Image
          src={me}
          alt="arslonbek"
          className="w-full h-full rounded-[50%] object-cover"
        />
      </div>
      <div
        data-aos="zoom-out"
        className="max-w-[506px] flex flex-col gap-2 text-center"
      >
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold">
          Arslonbek Ro&apos;ziboyev
        </h1>
        {/* <p className='text-sm md:text-base lg:text-lg'>
                    A passionate web developer with a keen eye for design and a love for creating intuitive user experiences.
                </p> */}
        <div className="flex gap-3 justify-center">
          <Link
            href="https://www.linkedin.com/in/arslonbekroziboyev/"
            target="_blank"
            className="cursor-pointer w-[35px] h-[35px] flex items-center justify-center rounded-[50%] bg-black"
          >
            <SlSocialLinkedin className="text-white text-[22px]" />
          </Link>
          <Link
            href="https://github.com/arslon1234"
            target="_blank"
            className="cursor-pointer w-[35px] h-[35px] flex items-center justify-center rounded-[50%] bg-black"
          >
            <FiGithub className="text-white text-[22px]" />
          </Link>
          <Link
            href="https://www.instagram.com/arslonbek0220/"
            target="_blank"
            className="cursor-pointer w-[35px] h-[35px] flex items-center justify-center rounded-[50%] bg-black"
          >
            <BsInstagram className="text-white text-[22px]" />
          </Link>
          <Link
            href="https://leetcode.com/u/roziboyevarslon0110/"
            target="_blank"
            className="cursor-pointer w-[35px] h-[35px] flex items-center justify-center rounded-[50%] bg-black"
          >
            <TbBrandLeetcode className="text-white text-[22px]" />
          </Link>
          <Link
            href="https://t.me/developer_0220"
            target="_blank"
            className="cursor-pointer w-[35px] h-[35px] flex items-center justify-center rounded-[50%] bg-black"
          >
            <PiTelegramLogo className="text-white text-[22px]" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-2">
        <Link
          href="/about"
          data-aos="fade-right"
          className="py-3 px-7 rounded-3xl hover:shadow-lg bg-black text-white"
        >
          About me
        </Link>
        <Link
          href="/blog"
          data-aos="fade-left"
          className="py-3 px-7 rounded-3xl hover:shadow-md bg-white text-black"
        >
          Read blog
        </Link>
      </div>
    </section>
  );
}

export default Home;
