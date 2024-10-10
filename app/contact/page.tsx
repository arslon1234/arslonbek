import React from 'react'

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
      <div className='flex gap-2 justify-center'>
        <aside className='w-[40px] h-[40px] rounded-[50%] bg-black'>
        </aside>
        <aside className='w-[40px] h-[40px] rounded-[50%] bg-black'>
        </aside>
        <aside className='w-[40px] h-[40px] rounded-[50%] bg-black'>
        </aside>
        <aside className='w-[40px] h-[40px] rounded-[50%] bg-black'>
        </aside>
      </div>
    </div>
    <div className='flex gap-5'>
    <div className='w-[50%] flex flex-col items-center gap-3 py-6 md:py-9 bg-black rounded-2xl md:rounded-3xl'>
    <h2 className='text-center text-white font-bold text-[22px]'>Contact information</h2>
    <p className='text-[#BCBCBC]'>+998 95 019 24 69</p>
    <p className='text-[#BCBCBC]'>Tashkent, Uzbekistan</p>
    <p className='text-[#BCBCBC]'>roziboyevarslon0110@gmail.com</p>
    </div>
    <div className='w-[50%] flex flex-col items-center gap-3 px-8 md:px-10 py-6 md:py-9 bg-main rounded-2xl md:rounded-3xl'>
      <h3 className='text-center text-white text-[22px] font-bold'>Feedback</h3>
    <form className='w-full flex flex-col items-center gap-3'>
      <input type="text" placeholder='Email' className='w-full py-[10px] px-4 rounded-[27px] outline-none text-[#7A7A7A]'/>
      <button type='submit' className='w-[200px] bg-black text-white py-3 rounded-3xl'>Send</button>
    </form>
    </div>
    </div>
    </section>
  )
}

export default Contact
