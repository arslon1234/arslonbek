// "use client"
// import { useQuery } from '@tanstack/react-query';
import React from 'react'
import BlogCard from '@/components/card'
// import { getBlog } from '@/lib/blog';
// import axiosInstance from '@/lib/axios';
const Blog = async () => {
  const data = await fetch("https://xamidulloxu-blog-app-10.deno.dev/api/blogs") 
  const blog = await data.json()
  // const { data} = useQuery({
  //   queryKey: ['blog'], 
  //   queryFn: getBlog,  
  // });
  return (
    <article>
      <h1 className="text-center text-[20px] font-bold mb-4">Blog</h1>
      <div className='flex flex-col'>
        {
          blog?.map((item: { _id: React.Key | null | undefined })=>{
            return <BlogCard item={item} key={item._id}/>
          })
        }
      </div>
    </article>
  )
}

export default Blog
