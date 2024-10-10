"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import img from '@/assets/portfolio.jpg'
import Image from 'next/image'
import BlogCard from '@/components/card'
import { useEffect } from 'react';
import AOS from 'aos';
const Blog = () => {
  const {push} = useRouter()
  useEffect(() => {
    AOS.init({
      duration: 1000,  
      once: true,  
    });
    AOS.refresh()
  }, []);
  const articles = [
    {img:img, name: "Article name", description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsum totam, porro consequuntur cumque eum."},
    {img:img, name: "Article name", description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsum totam, porro consequuntur cumque eum."},
    {img:img, name: "Article name", description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsum totam, porro consequuntur cumque eum."},
  ]
  // const aosAnimations = ["fade-right", "fade-left"]; 
  return (
    <article>
      <h1 className="text-center text-[20px] font-bold mb-4">Blog</h1>
      <div className='flex flex-col gap-8'>
      <div data-aos="zoom-in" className='flex flex-col gap-3'>
      <Image src={articles[0].img} onClick={()=>push(`/blog/1`)} alt='article' className='w-full h-[412px] object-cover rounded-3xl cursor-pointer'/>
      <h2 className='text-name_size font-bold'>Article name</h2>
      <p className='text-desc_size text-desc_color'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat quasi laborum quas deserunt at nisi? Nostrum perspiciatis, quae explicabo quaerat rerum corrupti expedita similique delectus aliquam voluptatem. Numquam, porro ea!
      </p>
      </div>
      <div className='flex gap-5'>
        {
          articles.splice(1).map((item,index)=>(
            <div key={index} data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} className='w-[50%]'>
              <BlogCard item={item} />
            </div>
          ))
        }
      </div>
      </div>
    </article>
  )
}

export default Blog
