import React from "react";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import DefaultErrorPage from "next/error";
import Head from "next/head";
import { useRouter } from "next/router";
import "../../builder-registry";
import { Suspense } from 'react';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

export async function getStaticProps() {
  const page = await builder
    .get("page", {
      url: "/blog",
    })
    .toPromise();

  return {
    props: {
      page: page || null,
    },
    revalidate: 5,
  };
}

export default function Blog({ page }) {
  // const router = useRouter();
  // const isPreviewing = useIsPreviewing();

  // if (router.isFallback) {
  //   return <h1>Loading...</h1>;
  // }

  // if (!page && !isPreviewing) {
  //   return <DefaultErrorPage statusCode={404} />;
  // }

  return (
    <>
      <Head>
        <title>{page?.data?.title}</title>
      </Head>
      <Suspense>
      <div className="max-w-6xl flex mx-auto">
        <BuilderComponent model="page" content={page || undefined} />
      </div>
      </Suspense>
    </>
  );
}
