import { builder } from "@builder.io/react";
import { useState, useEffect } from "react";

export default function BlogDetails({ content }) {
  const { author, description, category, title, publishedDate, readTime } =
    content.data;
  let [authorData, setAuthorData] = useState({ data: null });

  async function fetchData() {
    return await builder.get(`${author.model}`, {
      query: {
        id: `${author.id}`,
      },
    });
  }

  useEffect(() => {
    fetchData().then((value) => {
      if (value !== null) {
        setAuthorData({ value });
      }
    });
  }, []);

  const { name, linkedInUrl, profileImage, designation } =
    authorData?.value?.data || {};

  return (
    <main className="mx-auto mb-10 min-[375px]:mb-5">
      <section className="mx-auto w-full">
        <article>
          <header className="h-fit w-fit">
            <div className="mb-4 flex flex-col">
              <div className="w-screen bg-red-500 flex">
                <div className="mx-10 flex max-w-5xl flex-col justify-center pt-20 md:mx-20 xl:mx-auto">
                  <div className="my-4 md:my-7 flex flex-col text-xs sm:flex-row sm:items-center">
                    <a
                      className="transform w-fit cursor-pointer rounded-[100px] border-none bg-white px-6 py-2 font-semibold text-white shadow-md transition duration-200 ease-in-out text-xs hover:scale-95"
                      href={`/category/${category
                        .toLowerCase()
                        .replaceAll(" ", "-")}/`}
                    >
                      <p className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text font-bold text-transparent text-xs sm:text-xs">
                        {category}
                      </p>
                    </a>
                  </div>

                  <h1 className="font-heading font-bold text-white text-xl md:text-4xl">
                    {title.Default}
                  </h1>
                  <p className="my-2 mb-7 max-w-4xl font-extralight text-white text-xs sm:text-base">
                    {description}
                  </p>
                </div>
              </div>
            </div>

            <div className="mx-10 mb-8 flex max-w-5xl flex-col justify-center border-b-2 border-red-500 md:mx-20 xl:mx-auto">
              <div className="font-light text-[#57606a] text-sm">Author</div>

              {authorData?.value && (
                <div className="my-4 mt-2 flex flex-col justify-between sm:flex-row sm:items-center">
                  <div className="flex not-italic text-black text-base">
                    <img
                      className="mr-2 mt-2 h-16 w-16 rounded-full shadow-md shadow-gray-400 min-[375px]:mr-4 sm:mt-0"
                      src={profileImage}
                      alt={name}
                    />
                    <div className="justify-between flex flex-col my-2">
                      <a
                        href={linkedInUrl}
                        target="_blank"
                        rel="author"
                        className="mr-3 inline-flex items-center text-sm"
                      >
                        <span className="font-bold text-xs hover:underline min-[375px]:text-base">
                          {name}
                        </span>
                      </a>
                      <p className="font-light opacity-80 text-xs hover:no-underline min-[375px]:text-sm">
                        {designation && designation}
                      </p>
                      <div className="mb-2 block flex-col text-xs sm:hidden">
                        <time
                          dateTime={String(publishedDate)}
                          className="text-[#57606a] opacity-80"
                        >
                          {publishedDate}
                        </time>
                        <div className="items-center text-[#57606a] opacity-80">
                          {readTime} min read
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <div className="flex flex-row justify-center gap-7 font-light text-xs">
                      <time
                        dateTime={String(publishedDate)}
                        className="text-[#57606a] opacity-80"
                      >
                        {publishedDate}
                      </time>
                      <div className="items-center border-l-[1px] border-[#d0d7de] pl-7 text-[#57606a] opacity-80">
                        {readTime} min read
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </header>
        </article>
      </section>
    </main>
  );
}
