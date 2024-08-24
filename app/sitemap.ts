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
  
  const urlBase = "http://desentupidorarenovo.com.br";
  
  const posts: MetadataRoute.Sitemap = data.map((post: SanityDocument) => ({
    url: `${urlBase}/posts/${post.currentSlug}`,
    lastModified: post.updated,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [
    {
      url: `${urlBase}/`,
      lastModified: new Date("2024-08-20"),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${urlBase}/blog`,
      lastModified: new Date("2024-08-20"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${urlBase}/desentupimentos`,
      lastModified: new Date("2024-08-24"),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${urlBase}/desentupimentos/desentupimento-comercial`,
      lastModified: new Date("2024-08-20"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${urlBase}/desentupimentos/desentupimento-residencial`,
      lastModified: new Date("2024-08-20"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${urlBase}/desentupimentos/desentupimento-emergencial`,
      lastModified: new Date("2024-08-20"),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${urlBase}/desentupimentos/desentupimento-de-esgoto`,
      lastModified: new Date("2024-08-20"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${urlBase}/desentupimentos/desentupimento-de-pia`,
      lastModified: new Date("2024-08-20"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${urlBase}/desentupimentos/desentupimento-de-vaso-sanitario`,
      lastModified: new Date("2024-08-20"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${urlBase}/desentupimentos/desentupimento-de-ralo-entupido`,
      lastModified: new Date("2024-08-20"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${urlBase}/desentupimentos/desentupimento-de-caixa-de-gordura`,
      lastModified: new Date("2024-08-20"),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${urlBase}/desentupimentos/limpeza-de-fossa/`,
      lastModified: new Date("2024-08-20"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${urlBase}/desentupimentos/limpeza-de-sumidouro-rj`,
      lastModified: new Date("2024-08-20"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${urlBase}/desentupimentos/desentupimento-em-condominios`,
      lastModified: new Date("2024-08-20"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${urlBase}/desentupimentos/desentupimento-de-agua-potavel`,
      lastModified: new Date("2024-08-20"),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${urlBase}/desentupidora-24-horas-rio-de-janeiro`,
      lastModified: new Date("2024-08-24"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${urlBase}/orcamento`,
      lastModified: new Date("2024-08-24"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${urlBase}/rj`,
      lastModified: new Date("2024-08-24"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${urlBase}/rj/desentupidora-zona-norte-rj`,
      lastModified: new Date("2024-08-24"),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${urlBase}/rj/desentupidora-zona-sul-rj`,
      lastModified: new Date("2024-08-24"),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${urlBase}/rj/desentupidora-zona-oeste-rj`,
      lastModified: new Date("2024-08-24"),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${urlBase}/rj/desentupidora-centro-rj`,
      lastModified: new Date("2024-08-24"),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    ...posts,
  ];
}

