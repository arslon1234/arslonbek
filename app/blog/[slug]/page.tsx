'use client'; // Bu komponent endi faqat client tarafda ishlaydi

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { PiHandsClappingThin } from "react-icons/pi";
import { FiEye } from 'react-icons/fi';
import { capitalizeText } from '@/helpers/capitalizeText';
import { applySyntaxHighlighting } from '@/helpers/applySyntaxHighlighting';

interface PageProps {
  params: {
    slug: string;
  };
}

const Article = ({ params }: PageProps) => {
  const { slug } = params;
  const [blog, setBlog] = useState<any>(null); // blog ma'lumotlarini saqlash uchun state
  const [likesCount, setLikesCount] = useState<number>(0); // likesCount ni state da saqlash
  const [viewsCount, setViewsCount] = useState<number>(0); // viewsCount ni state da saqlash

  // Blog ma'lumotlarini yuklash
  useEffect(() => {
    const fetchBlog = async () => {
      const data = await fetch(`https://texnoark.uz/api/blogs/${slug}`, {
        cache: 'no-store',
      });
      const blogData = await data.json();
      setBlog(blogData);
      setLikesCount(blogData.likesCount); // likesCount ni initial qiymatiga o'rnatish
      setViewsCount(blogData.viewsCount); // viewsCount ni initial qiymatiga o'rnatish
    };

    fetchBlog();
  }, [slug]);

  // Like qo'shish funksiyasi
  const addLike = async () => {
    try {
      const res = await fetch(`https://texnoark.uz/api/blogs/${slug}/like`, {
        method: 'GET', // POST so'rovi orqali like qo'shish
        cache: "no-store"
      });
      if (res.ok) {
        const {likesCount} = await res.json()
        console.log(likesCount, 'likesCount')
        setLikesCount(likesCount); // likesCount ni yangilash
      } else {
        console.error("Xatolik yuz berdi: Like qo'shilmadi");
      }
    } catch (err) {
      console.error("Xatolik yuz berdi:", err);
    }
  };

  if (!blog) return <p>Yuklanmoqda...</p>;

  const heading = capitalizeText(slug);

  return (
    <article>
      <h1 className='text-center text-[25px] md:text-[35px] font-bold'>{heading}</h1>
      <section className='flex gap-12 items-center py-3 mt-3 border-y-[0.4px] border-[#e1e0e0]'>
        {/* Like tugmasi */}
        <button onClick={addLike} className='flex items-center gap-2'>
          <PiHandsClappingThin className='text-gray-700 text-[22px] cursor-pointer' />
          <span className='text-gray-500 text-[16px]'>{likesCount}</span>
        </button>
        <div className='flex items-center gap-2'>
          <FiEye className='text-gray-700 text-[22px]' />
          <span className='text-gray-500 text-[16px]'>{viewsCount}</span>
        </div>
      </section>
      {blog.contents.map((item: any) => (
        <div key={item._id} className='mt-3 md:mt-6'>
          <div
            dangerouslySetInnerHTML={{ __html: applySyntaxHighlighting(item.text) }}
            className="formatted-html"
          />
          {item.image && (
            <div className='w-full my-2'>
              <Image src={item.image} width={100} layout='responsive' height={400} loading='lazy' alt={item.title} />
            </div>
          )}
        </div>
      ))}
    </article>
  );
};

export default Article;
