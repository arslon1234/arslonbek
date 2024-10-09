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
    <header className="flex justify-between items-center my-3 px-4 py-3 md:px-10">
      {/* Logo */}
      <Link href="/" className="text-[25px] font-bold">
        Arslonbek
      </Link>

      {/* Mobile Menu Button */}
      <div className="md:hidden relative flex items-center">
        <button
          className="py-1 px-6 flex items-center cursor-pointer gap-2 border border-[#ccc] rounded-3xl z-20"
          onClick={handleClick}
        >
          <Image
            src={open ? close : menu}
            alt={open ? "close" : "menu"}
            className={`w-6 cursor-pointer transition-transform duration-500 ${
              open ? "rotate-90" : "rotate-0"
            }`}
          />
          <span className="text-[20px] font-normal cursor-pointer">Menu</span>
        </button>

        {/* Mobile Menu Links */}
        <section
          className={`absolute z-30 top-11 shadow-custom p-2 px-6 rounded-3xl bg-white transition-all duration-500 ease-in-out ${
            open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
          }`}
        >
          <div className="flex flex-col gap-4">
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

      {/* Desktop Menu Links */}
      <div className="hidden md:flex gap-6">
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

      {/* Get in touch button */}
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
