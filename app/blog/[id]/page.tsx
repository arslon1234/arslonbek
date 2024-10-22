"use client"
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import axiosInstance from '@/lib/axios'
import Image from 'next/image'
const Article = () => {
  const {id:slug} = useParams()
  const [contents,setContents] = useState([])
  useEffect(()=>{
    axiosInstance.get(`/blogs/${slug}`).then(res=>{
      console.log(res?.data.contents)
      setContents(res?.data.contents)
    })
  },[])
  return (
    <article>
      {
        contents?.map((item:any)=>{
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
