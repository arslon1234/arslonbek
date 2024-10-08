// import Image from "next/image";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Arslonbek Ro`ziboyev - Personal Portfolio</title>
        <meta
          name="description"
          content="Welcome to Arslonbek Ro'ziboyev's personal portfolio. Learn more about my projects, experience, and skills."
        />
        <meta
          name="keywords"
          content="Arslonbek Ro'ziboyev, Personal Portfolio, Web Developer, Next.js, React.js, Vue.js, Nuxt.js, SEO, Software Engineer"
        />
        <meta
          property="og:title"
          content="Arslonbek Ro'ziboyev - Personal Portfolio"
        />
        <meta
          property="og:description"
          content="Explore my portfolio, featuring my projects, blog, and contact information."
        />
        <meta property="og:image" content="/static/awesome-image.png" />
        <meta property="og:url" content="https://arslonbek.com" />
      </Head>
      <div>
        <h1 className="text-center">Welcome to My Awesome Site!</h1>
      </div>
    </>
  );
}
