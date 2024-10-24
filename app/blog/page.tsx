"use client"
import { useQuery } from '@tanstack/react-query';
import React from 'react'
import BlogCard from '@/components/card'
import { getBlog } from '@/lib/blog';
const Blog = () => {
  const { data} = useQuery({
    queryKey: ['blog'], 
    queryFn: getBlog,  
  });
  return (
    <article>
      <h1 className="text-center text-[20px] font-bold mb-4">Blog</h1>
      <div className='flex flex-col'>
        {
          data?.map((item: { _id: React.Key | null | undefined })=>{
            return <BlogCard item={item} key={item._id}/>
          })
        }
      </div>
    </article>
  )
}

export default Blog
