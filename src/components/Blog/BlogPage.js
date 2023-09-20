import BlogDetails from "./BlogDetails";
import { BuilderComponent } from "@builder.io/react";

export default function BlogPage({ blogPost }) {
  const { blogDetails } = blogPost.data;
  return (
    <section className="mx-auto mb-10 min-[375px]:mb-5">
      <section className="mx-auto w-full">
        <article>
          <header className="h-fit w-fit">
            <BlogDetails content={blogDetails.value} />
          </header>
          <div className="relative mx-10 flex max-w-5xl flex-col justify-center md:mx-20 md:flex-row xl:mx-auto">
            <div className="prose-md prose-headings:font-heading prose-headings:leading-tighter prose-lg relative text-justify text-xs dark:prose-invert lg:prose-xl prose-headings:font-bold prose-headings:tracking-tighter prose-a:text-red-500 prose-li:list-disc prose-img:rounded-md prose-img:shadow-lg dark:prose-a:text-blue-400 sm:text-base ">
              <BuilderComponent
                model="blog-content"
                content={blogPost || undefined}
              />
            </div>
          </div>
        </article>
      </section>
    </section>
  );
}
