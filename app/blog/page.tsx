"use client"
import React, { useEffect, useState } from 'react'
import BlogCard from '@/components/card'
import axiosInstance from '@/lib/axios'
const Blog = () => {
  const [data,setData] = useState<any>([])
  useEffect(()=>{
   axiosInstance.get("/titles").then(res=>{
    setData(res?.data)
    console.log(res.data)
   })
  },[])
  return (
    <article>
      <h1 className="text-center text-[20px] font-bold mb-4">Blog</h1>
      <div className='flex flex-col'>
        {
          data.map((item: { _id: React.Key | null | undefined })=>{
            return <BlogCard item={item} key={item._id}/>
          })
        }
      </div>
    </article>
  )
}

export default Blog
