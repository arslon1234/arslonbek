import React from 'react'
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { PiTelegramLogo } from "react-icons/pi";
import Link from 'next/link';
const Contact = () => {
  return (
    <section className='flex flex-col gap-5'>
    <div className='bg-[#F6F6F6] rounded-2xl md:rounded-3xl py-[20px] md:py-[36px] flex flex-col items-center gap-2 md:gap-3'>
      <h1 className='text-center text-[22px] font-bold'>Hello, I`m Arslonbek</h1>
      <div className='max-w-[506px]'>
      <p className='text-desc_color text-desc_size text-center'>
      A passionate web developer with a keen eye for design and a love for creating intuitive user experiences.
      </p>
      </div>
      <div className='flex gap-3 justify-center'>
        <Link href='https://www.linkedin.com/in/arslonbekroziboyev/' target='_blank' className='cursor-pointer w-[42px] h-[42px] flex items-center justify-center rounded-[50%] bg-black'>
          <SlSocialLinkedin className='text-white text-[21px]'/>
        </Link>
        <Link href='https://github.com/arslon1234' target='_blank' className='cursor-pointer w-[42px] h-[42px] flex items-center justify-center rounded-[50%] bg-black'>
          <FiGithub className='text-white text-[21px]'/>
        </Link>
        <Link href="https://www.instagram.com/arslonbek0220/" target='_blank' className='cursor-pointer w-[42px] h-[42px] flex items-center justify-center rounded-[50%] bg-black'>
          <BsInstagram className='text-white text-[21px]'/>
        </Link>
        <Link href="https://t.me/developer_0220" target='_blank' className='cursor-pointer w-[42px] h-[42px] flex items-center justify-center rounded-[50%] bg-black'>
          <PiTelegramLogo className='text-white text-[21px]'/>
        </Link>
      </div>
    </div>
    {/* <div className='flex flex-col md:flex-row gap-5'>
    <div className='w-full md:w-[50%] flex flex-col items-center justify-center gap-3 py-6 bg-black rounded-2xl md:rounded-3xl'>
    <h2 className='text-center text-white font-bold text-[22px]'>Contact information</h2>
    <p className='text-[#BCBCBC]'>+998 95 019 24 69</p>
    <p className='text-[#BCBCBC]'>Tashkent, Uzbekistan</p>
    <p className='text-[#BCBCBC]'>roziboyevarslon0110@gmail.com</p>
    </div>
    <div className='w-full md:w-[50%] flex flex-col items-center gap-3 px-6 md:px-8 py-6 bg-main rounded-2xl md:rounded-3xl'>
      <h3 className='text-center text-white text-[22px] font-bold'>Feedback</h3>
    <form className='w-full flex flex-col items-center gap-3'>
      <input type="text" name='email' placeholder='Email' className='w-full py-[10px] px-4 rounded-[20px] outline-none text-[#7A7A7A]'/>
      <textarea name="feedback" placeholder='Write your feedback...' className='w-full h-32 py-[10px] px-4 rounded-[20px] outline-none text-[#7A7A7A]'></textarea>
      <button type='submit' className='w-[200px] bg-black text-white py-3 rounded-3xl'>Send</button>
    </form>
    </div>
    </div> */}
    </section>
  )
}

export default Contact
