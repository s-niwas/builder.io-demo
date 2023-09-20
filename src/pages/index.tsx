import { Inter } from "next/font/google";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Suspense>
      <main
        className={`min-h-screen bg-black text-white py-20 ${inter.className}`}
      >
        <div className="">
          <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
            <div className="flex gap-5 flex-col w-full lg:w-1/3 justify-center items-start p-8">
              <h1 className="text-3xl md:text-6xl  text-red-500 tracking-loose">
                Incresco - Builder.io Integration with Next.js
              </h1>
              <h4 className="text-xl md:text-2xl leading-relaxed md:leading-snug mb-2">
                We architect your <span className="text-red-500">ideas</span>
              </h4>
              <a
                href="/blog/"
                className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
              >
                Explore Blogs
              </a>
              <a
                href="/shop/"
                className="bg-transparent hover:bg-green-500 text-green-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-green-500 hover:border-transparent"
              >
                Explore Shopify Products
              </a>
            </div>
          </div>
        </div>
      </main>
    </Suspense>
  );
}
