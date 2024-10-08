import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "About me",
  description: "Arslonbek Ro'ziboyev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Arslonbek Ro'ziboyev",
              jobTitle: "Software Engineer",
              description: "I am a software engineer with expertise in Next.js, React, and SEO optimization.",
              url: "https://arslonbek.com",
              sameAs: [
                "https://www.linkedin.com/in/arslonbekroziboyev/",
                "https://github.com/arslon1234"
              ],
              image: "/static/arslonbek-image.png"
            }),
          }}
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col h-screen justify-between`}
      >
       <Header/>
        <main className="container mx-auto pt-10 px-24">
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
