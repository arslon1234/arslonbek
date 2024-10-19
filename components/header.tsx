"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import Image from "next/image";
interface ILinks {
  title: string;
  path: string;
}
const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links: ILinks[] = [
    { title: "About", path: "/about" },
    { title: "Blog", path: "/blog" },
    { title: "Portfolio", path: "/portfolio" },
    { title: "Contact", path: "/contact" },
  ];
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <header className="flex justify-between items-center my-3 px-4 md:px-16 lg:px-28 py-3">
      <Link href="/" className="text-[25px] font-bold">
        Arslonbek
      </Link>
      <div className="relative flex flex-col items-center">
        <button
          className="py-1 px-4 md:px-6 flex items-center cursor-pointer gap-2 border border-[#ccc] rounded-3xl z-20"
          onClick={handleClick}
        >
          <Image
            src={open ? close : menu}
            alt={open ? "close" : "menu"}
            className={`w-5 md:w-6 cursor-pointer transition-transform duration-500 ${
              open ? "rotate-90" : "rotate-0"
            }`}
          />
          <span className="text-[18px] md:text-[20px] font-normal cursor-pointer">Menu</span>
        </button>
        <section
          className={`absolute top-11 z-10 shadow-custom bg-white md:bg-transparent p-2 px-6 rounded-3xl transition-all duration-500 ease-in-out ${
            open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'
          }`}
        >
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 ">
            {links.map((link, index) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  href={link.path}
                  className={`${
                    isActive
                      ? "text-main cursor-pointer font-semibold"
                      : "cursor-pointer font-semibold"
                  } transition-transform duration-500 hover:scale-105`}
                  key={index}
                >
                  {link.title}
                </Link>
              );
            })}
          </div>
        </section>
      </div>
      
      <Link 
         href="https://t.me/developer_0220"
         target="_blank"
         rel="noopener noreferrer"
        className="py-3 px-4 text-white bg-black rounded-[33px] hidden md:block"
      >
        Get in touch
      </Link>
    </header>
  );
};

export default Header;
