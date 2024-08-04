// pages/sitemap.xml.js
import { groq } from "next-sanity";
import { MetadataRoute } from "next";
import type { SanityDocument } from "@sanity/client";
import { client } from "../sanity/lib/client";

async function getData() {
  const query = `*[_type == "post"] {
    "currentSlug": slug.current,
      "updated": _updatedAt
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data = await getData();
  

  
  const posts: MetadataRoute.Sitemap = data.map((post: SanityDocument) => ({
    url: `http://desentupidorarenovo.com.br/posts/${post.currentSlug}`,
    lastModified: post.updated,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [
    {
      url: "http://desentupidorarenovo.com.br/",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "http://desentupidorarenovo.com.br/blog",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },

    // Services
    {
      url: "/desentupimentos/desentupimento-comercial",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "/desentupimentos/desentupimento-residencial",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "/desentupimentos/desentupimento-emergencial",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "/desentupimentos/desentupimento-de-esgoto",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "/desentupimentos/desentupimento-de-pia",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "/desentupimentos/desentupimento-de-vaso-sanitario",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "/desentupimentos/desentupimento-de-ralo-entupido",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "/desentupimentos/desentupimento-de-caixa-de-gordura",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    ...posts,
  ];
}

