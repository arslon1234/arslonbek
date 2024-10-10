"use client"
import Image from 'next/image'
import React from 'react'
import me from '@/assets/me.png'
import Link from 'next/link'
import { useEffect } from 'react';
import AOS from 'aos';

function Home() {
    useEffect(() => {
        AOS.init({
          duration: 800,  
          once: true,  
        });
      }, []);
    return (
        <section className='w-full flex justify-center gap-5 flex-col items-center bg-[#F6F6F6] rounded-3xl py-9 px-4 md:px-8 lg:px-16'>
            <div data-aos="zoom-in" className='w-[180px] h-[180px] md:w-[252px] md:h-[252px] rounded-[50%] bg-main flex items-center justify-center'>
                <Image src={me} alt='arslonbek' className='w-full h-full rounded-[50%] object-cover' />
            </div>
            <div data-aos="zoom-out" className='max-w-[506px] flex flex-col gap-2 text-center'>
                <h1 className='text-lg md:text-xl lg:text-2xl font-bold'>Hello, I`m Arslonbek</h1>
                <p className='text-sm md:text-base lg:text-lg'>
                    A passionate web developer with a keen eye for design and a love for creating intuitive user experiences.
                </p>
            </div>
            <div className='flex flex-col md:flex-row justify-center gap-2'>
                <Link href='/about' data-aos="fade-up" className='py-3 px-7 rounded-3xl hover:shadow-lg bg-black text-white'>About me</Link>
                <Link href='/portfolio' data-aos="fade-up" className='py-3 px-7 rounded-3xl hover:shadow-md bg-white text-black'>Portfolio</Link>
            </div>
        </section>
    )
}

export default Home
