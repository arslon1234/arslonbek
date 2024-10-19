"use client"
// import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';
import AOS from 'aos';
import { IoBookOutline } from "react-icons/io5";
// import { BiSolidLock } from "react-icons/bi";
import { LiaHandPointer } from "react-icons/lia";
// interface PropType {
//    item:{
//     name: string,
//     description: string,
//    },
//    key: number
// }
const BlogCard = () => {
  // const {push} = useRouter()
  const [count] = useState(1)
  useEffect(() => {
        AOS.init({
          duration: 800,  
          once: true,  
        });
      }, []);
  return (
    <section data-aos="fade-up" className="relative flex items-center justify-between cursor-pointer py-4 border-b-[1px] border-[#999] hover:border-b-[1.6px] hover:border-[#000] group">
  <div className="flex items-center gap-2">
    <IoBookOutline />
    <p className="text-[16px] font-normal">Metadan offer oldim</p>
  </div>
  <div className="flex items-center relative">
    <span className="italic text-[13px] text-[#6e6e6e] transition-transform duration-300 ease-in-out group-hover:-translate-x-4">
      September 26, 2024
    </span>
    {count % 2 === 0 ? (
      <LiaHandPointer className="ml-2 text-[#6e6e6e] text-[22px] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 rotate-[50deg]" />
    ) : (
      <span className="absolute left-full ml-2 px-2 py-1 text-white bg-black whitespace-nowrap rounded-lg opacity-0 transform translate-x-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-0">
        Coming soon
      </span>
    )}
  </div>
</section>
  )
}

export default BlogCard
