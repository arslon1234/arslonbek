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
    { title: "Blog", path: "/blog" },
    { title: "Portfolio", path: "/portfolio" },
    { title: "Contact", path: "/contact" },
  ];
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="flex justify-center my-3">
      <div className="relative flex flex-col items-center">
        <button
          className="py-1 px-6 flex items-center gap-2 border border-[#ccc] rounded-3xl"
          onClick={handleClick}
        >
          {open ? (
            <Image src={close} alt="image" className="w-6 text-green-500" />
          ) : (
            <Image src={menu} alt="image" className="w-6" />
          )}
          <span className="text-[20px] font-normal">Menu</span>
        </button>
        {open && (
          <div className="absolute top-11 shadow-custom p-2 px-6 rounded-3xl">
            <div className="flex gap-6">
              {/* } */}
              {links.map((link, index) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    href={link.path}
                    className={isActive ? "text-main font-bold" : ""}
                    key={index}
                  >
                    {link.title}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
