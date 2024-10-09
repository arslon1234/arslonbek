import HomePage from "@/components/home";
import type { Metadata } from "next";

// Define the metadata
export const metadata: Metadata = {
  title: "Arslonbek Ro'ziboyev - Personal Portfolio",
  description:
    "Welcome to Arslonbek Ro'ziboyev's personal portfolio. Learn more about my projects, experience, and skills.",
  keywords:
    "Arslonbek Ro'ziboyev, arslonbek, arslon, Personal Portfolio, Web Developer, Next.js, React.js, Vue.js, Nuxt.js, SEO, Software Engineer",
  openGraph: {
    title: "Arslonbek Ro'ziboyev - Personal Portfolio",
    description:
      "Explore my portfolio, featuring my projects, blog, and contact information.",
    url: "https://arslonbek.com",
    images: [
      {
        url: "/static/awesome-image.png",
        alt: "Arslonbek Ro'ziboyev's Portfolio Image",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
