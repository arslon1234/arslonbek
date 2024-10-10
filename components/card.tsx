"use client"
import Image, { StaticImageData } from "next/image"
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';
import AOS from 'aos';
interface PropType {
   item:{
    name: string,
    description: string,
    img: StaticImageData
   },
   key: number
}
const BlogCard = ({item,key}:PropType) => {
  const {push} = useRouter()
  useEffect(() => {
        AOS.init({
          duration: 800,  
          once: true,  
        });
      }, []);
  return (
    <section  className="w-1/2 flex flex-col gap-3 cursor-pointer" key={key} onClick={()=>push(`/blog/1`)}>
        <Image src={item.img} alt="blog-img" className="w-full h-[280px] rounded-3xl object-cover"/>
        <h3 className="text-name_size font-bold">{item.name}</h3>
        <span className="text-desc_size text-desc_color">{item.description}</span>
    </section>
  )
}

export default BlogCard
