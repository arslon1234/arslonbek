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
}
const BlogCard = ({item}:PropType) => {
  const {push} = useRouter()
  useEffect(() => {
        AOS.init({
          duration: 800,  
          once: true,  
        });
      }, []);
  return (
    <section  className="w-full flex flex-col gap-3 cursor-pointer" onClick={()=>push(`/blog/1`)}>
        <Image src={item.img} alt="blog-img" className="w-full h-[350px] rounded-3xl object-cover"/>
        <h3 className="text-name_size font-bold">{item.name}</h3>
        <span className="text-desc_size text-desc_color">{item.description}</span>
    </section>
  )
}

export default BlogCard
