import type { Metadata } from "next";
import dynamic from "next/dynamic";
import localFont from "next/font/local";
import { Suspense } from "react";
import "./globals.css";
const Header = dynamic(() => import("../components/header"));
const Footer = dynamic(() => import("../components/footer"));
import Head from "next/head";
import Loading from "./loading";

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
  title: "Arslonbek's Blog",
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
              description:
                "I am a software engineer with expertise in Next.js, React, and SEO optimization.",
              url: "https://arslonbek.com",
              sameAs: [
                "https://www.linkedin.com/in/arslonbekroziboyev/",
                "https://github.com/arslon1234",
              ],
              image: "/static/arslonbek-image.png",
            }),
          }}
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col h-screen justify-between`}
      >
          <Suspense fallback={<Loading />}>
            <Header />
            <main className="container mx-auto py-6 px-4 md:px-16 lg:px-56 flex-1">
              {children}
            </main>
            <Footer />
          </Suspense>
      </body>
    </html>
  );
}
