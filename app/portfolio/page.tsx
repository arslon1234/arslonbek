"use client"
// import React, { useEffect } from "react";
// import portfolioImg from "@/assets/portfolio.jpg";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import axios from "axios";
const Page = () => {
  // const {push} = useRouter()
  // const users = [
  //   { image: portfolioImg },
  //   { image: portfolioImg },
  //   { image: portfolioImg },
  //   { image: portfolioImg },
  //   { image: portfolioImg },
  //   { image: portfolioImg },
  //   { image: portfolioImg },
  //   { image: portfolioImg },
  // ];
  // const handleClick =(id:number)=>{
  //   push(`/portfolio/${id}`)
  // }
  // useEffect(()=>{
  //   axios.get("https://texnoark.uz/api/titles")
  // },[])
  return (
    <section>
      <h1 className="text-center text-[20px] font-bold mb-4">Cooming soon...</h1>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {users.map((user, index) => (
        <div
          key={index}
          className={`
            relative w-full
            ${index % 3 === 0 ? 'md:col-span-2' : 'md:col-span-1'}
          `}
        >
          <Image
            src={user.image}
            alt={`User ${index + 1}`}
            className="w-full h-[400px] object-cover rounded-xl shadow-lg cursor-pointer"
            onClick={()=>handleClick(1)}
          />
          {index % 3 === 0 && (
            <div className="absolute bottom-4 left-4 text-white font-semibold">
              <span>Project Name</span>
              <span>2025</span>
            </div>
          )}
        </div>
      ))}
    </div> */}
    </section>
  );
};

export default Page;
