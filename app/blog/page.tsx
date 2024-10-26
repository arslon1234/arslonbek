import React from 'react'
import BlogCard from '@/components/card'
const Blog = async () => {
  const data = await fetch("https://texnoark.uz/api/titles/",{
  cache: 'no-store',  // Disable caching
}) 
  const blog = await data.json()
  console.log(blog)
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
