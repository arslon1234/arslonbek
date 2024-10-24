"use client"
import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { getBlogById } from '@/lib/blog';
const Article = () => {
  const {id:slug} = useParams()
  const { data } = useQuery({
    queryKey: ['single-blog'], 
    queryFn: ()=> getBlogById(slug),  
  });
  return (
    <article>
      {
        data?.contents?.map((item:any)=>{
          return <div key={item._id}>
            <div dangerouslySetInnerHTML={{ __html: item.text }} />
            {item.image && <Image src={item.image} width={500} height={400} loading='lazy' alt={item.title}/>}
          </div>
        })
      }
    </article>
  )
}

export default Article
