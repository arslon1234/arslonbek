import Image from 'next/image'
import React from 'react'
import me from '@/assets/me.png'
import Link from 'next/link'
function Home() {
    return (
        <section className='w-full flex justify-center gap-5 flex-col items-center bg-[#F6F6F6] rounded-3xl py-9'>
            <div className='w-[252px] h-[252px] rounded-[50%] bg-main flex items-center justify-center'>
                <Image src={me} alt='arslonbek' className='w-full h-full rounded-[50%] object-cover' />
            </div>
            <div className='max-w-[506px] flex flex-col gap-2'>
                <h1 className='text-name_size font-bold text-center'>Hello, I`m Arslonbek</h1>
                <p className='text-center'>
                    A passionate web developer with a keen eye for design and a love for creating intuitive user experiences.
                </p>
            </div>
            <div className='flex justify-center gap-2'>
                <Link href='/about' className='py-3 px-7 rounded-3xl hover:shadow-lg bg-black text-white'>About me</Link>
                <Link href='/portfolio' className='py-3 px-7 rounded-3xl hover:shadow-md bg-white text-black'>Portfolio</Link>
            </div>
        </section>
    )
}

export default Home
