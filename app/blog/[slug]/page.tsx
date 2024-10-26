import Image from 'next/image'
import { capitalizeText } from '@/helpers/capitalizeText';
import { applySyntaxHighlighting } from '@/helpers/applySyntaxHighlighting';
interface PageProps {
  params: {
    slug: string;
  };
}

const Article = async ({params}: PageProps) => {
  const {slug} = params
  const data = await fetch(`https://texnoark.uz/api/blogs/${slug}`,{
    cache: 'no-store'
  }) 
  const blog = await data.json()
  const heading = capitalizeText(slug)
  console.log(slug)
  return (
    <article>
      <h1 className='text-center text-[25px] md:text-[35px] font-bold'>{heading}</h1>
      {
        blog?.contents?.map((item:any)=>{
          return <div key={item._id} className='mt-3 md:mt-6'>
            <div
            dangerouslySetInnerHTML={{ __html: applySyntaxHighlighting(item.text) }}
            className="formatted-html"
          />
            {/* <div dangerouslySetInnerHTML={{ __html: item.text }} /> */}
            {item.image && <div className='w-full my-2'><Image src={item.image} width={100} layout='responsive' height={400} loading='lazy' alt={item.title}/></div>}
          </div>
        })
      }
    </article>
  )
}

export default Article
