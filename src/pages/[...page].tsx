import React from "react";
import { useRouter } from "next/router";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import DefaultErrorPage from "next/error";
import Head from "next/head";
import { BuilderContent } from "@builder.io/sdk";
import { GetStaticProps } from "next";
import "../builder-registry";
import { Suspense } from 'react';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = await builder
    .get("page", {
      userAttributes: {
        urlPath: "/" + ((params?.page as string[])?.join("/") || ""),
      },
    })
    .toPromise();

  return {
    props: {
      page: page || null,
    },
    revalidate: 5,
  };
};

export async function getStaticPaths() {
  const pages = await builder.getAll("page", {
    fields: "data.url",
    options: { noTargeting: true },
  });

  return {
    paths: pages
      .map((page) => String(page.data?.url))
      .filter((url) => url !== "/" && url !="/blog"),
    fallback: "blocking",
  };
}

export default function Page({ page }: { page: BuilderContent | null }) {
  // const router = useRouter();
  // const isPreviewing = useIsPreviewing();

  // if (router.isFallback) {
  //   return <h1>Loading...</h1>
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
      <BuilderComponent model="page" content={page || undefined} />
      </Suspense>
    </>
  );
}
