"use client";
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";
import AOS from "aos";
import { IoBookOutline } from "react-icons/io5";
import { AiTwotoneLock } from "react-icons/ai";
import { LiaHandPointer } from "react-icons/lia";
const BlogCard = ({ item }: any) => {
  const {push} = useRouter()
  const [formattedDate, setFormattedDate] = useState("");
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
    const date = new Date(item.date);
    const options: any = { year: "numeric", month: "long", day: "numeric" };
    setFormattedDate(date.toLocaleDateString("en-US", options));
  }, [item.date]);
  return (
    <section
      data-aos="fade-up"
      className={`relative flex items-center justify-between py-4 border-b-[1px] border-[#999] hover:border-b-[1.6px] hover:border-[#000] group ${
        item.status === 'active' ? 'cursor-pointer' : 'cursor-not-allowed'
      }`}
      onClick={() => {
        if (item.status === 'active') {
          push(`/blog/${item.slug}`)
        }
      }}
    >
      <div className="flex items-center gap-2">
          {item.status === "active" ? <IoBookOutline className='text-[17px]'/> : <AiTwotoneLock className='text-[17px]'/>}
        <p className="text-[16px] font-normal">{item?.title}</p>
      </div>
      <div className="flex items-center relative">
        <span className="italic text-[13px] text-[#6e6e6e] transition-transform duration-300 ease-in-out group-hover:-translate-x-3">
          {formattedDate}
        </span>
        {item.status == 'active' ? (
          <LiaHandPointer className="text-[#6e6e6e] text-[22px] hidden transition-opacity duration-300 ease-in-out group-hover:block rotate-[60deg]" />
        ) : (
          <span className="absolute left-full ml-2 px-2 py-1 text-white bg-black whitespace-nowrap rounded-lg opacity-0 transform translate-x-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-0">
            Coming soon
          </span>
        )}
      </div>
    </section>
  );
};

export default BlogCard;
