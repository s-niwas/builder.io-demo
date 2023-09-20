import React from "react";
import { builder,useIsPreviewing } from "@builder.io/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../api";
import BlogPage from "@/components/Blog/BlogPage";
import "../../builder-registry";
import { Suspense } from 'react';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);
export async function getStaticProps({ params, preview = false, previewData }) {
  let { post, morePosts } = await getPostAndMorePosts(
    params?.slug,
    preview,
    previewData
  );
  return {
    props: {
      key: post?.id + post?.data.url + params.slug || null,
      preview,
      post,
      morePosts,
    },
    revalidate: 5,
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map((post) => `${post?.data?.url}`) || [],
    fallback: true,
  };
}
export default function BlogDetails({ post }) {
  // const router = useRouter();
  // const isPreviewing = useIsPreviewing();

  // if (router.isFallback) {
  //   return <h1>Loading...</h1>;
  // }

  // if (!post && !isPreviewing) {
  //   return <DefaultErrorPage statusCode={404} />;
  // }

  return (
    <div>
      <Head>
        <title>{post?.data?.title}</title>
      </Head>
      <Suspense>
      <BlogPage blogPost={post} />
      </Suspense>
    </div>
  );
}
