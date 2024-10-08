"use client"
import Image from 'next/image'
import React from 'react'
import img from '@/assets/portfolio.jpg'
import Link from 'next/link'
const Page = () => {
    const values = ["React", "React-query", "Ant design"]
    const others = [
        {image: img},
        {image: img},
        {image: img},
    ]
    const nextPage =()=>{
        // move next page
    }
  return (
    <section>
      <Image src={img} alt='img' className='w-full h-[350px] rounded-3xl object-cover'/>
      <h1 className='mt-5 font-bold text-[22px]'>Project name</h1>
      <p className='text-[#7A7A7A] mt-[12px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus dolor ea nisi explicabo suscipit? Omnis.
      </p>
      <div className='flex gap-2 my-[12px]'>
        <Link href='/' className='py-[12px] px-[45px] rounded-3xl bg-black text-white text-[15px]'>View</Link>
        <Link href='/' className='py-[12px] px-[45px] rounded-3xl border border-[#D7D7D7] text-[15px]'>GitHub Repository</Link>
      </div>
      <div className='mt-16'>
        <h2 className='text-[22px] font-bold'>Technologies Used</h2>
        <div className='flex gap-2 mt-3'>
        {
            values.map((item,index)=>(
                <button key={index} className='px-4 py-2 rounded-3xl border border-[#D7D7D7]'>{item}</button>
            ))
        }
        </div>
      </div>
      <aside className='mt-16 flex flex-col gap-5'>
        <h3 className='text-center text-[22px] font-bold'>Other Projects</h3>
        <div className='grid grid-cols-[auto_auto_auto] gap-5'>
            {
                others.map((item,index)=>(
                    <Image src={item.image} className='rounded-3xl h-[250px] object-cover' alt='img' key={index}/>
                ))
            }
        </div>
        <div className='flex justify-center'>
        <button className='px-5 py-3 block rounded-3xl border border-[#D7D7D7]' onClick={nextPage}>View more</button>
        </div>
      </aside>
    </section>
  )
}

export default Page
