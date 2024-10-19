"use client"
import React from 'react'
import BlogCard from '@/components/card'

const Blog = () => {
  // const articles = [
  //   {img:img, name: "Article name", description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsum totam, porro consequuntur cumque eum."},
  //   {img:img, name: "Article name", description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsum totam, porro consequuntur cumque eum."},
  //   {img:img, name: "Article name", description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsum totam, porro consequuntur cumque eum."},
  // ]
  return (
    <article>
      <h1 className="text-center text-[20px] font-bold mb-4">Blog</h1>
      <div className='flex flex-col'>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      </div>
    </article>
  )
}

export default Blog
