import { urlForImage } from "@/sanity/lib/utils";
import type { HeroQueryResult, SettingsQueryResult } from "../sanity.types";
import * as demo from "../sanity/lib/demo";
import { sanityFetch } from "../sanity/lib/fetch";
import { heroQuery, settingsQuery } from "../sanity/lib/queries";
import Image from 'next/image';

export default async function RecentStories() {
    const [settings, heroPost] = await Promise.all([
        sanityFetch<SettingsQueryResult>({
            query: settingsQuery,
        }),
        sanityFetch<HeroQueryResult>({ query: heroQuery }),
    ]);

    return (
        <section className="text-gray-400 body-font bg-gray-900">

        </section>        
    )
}