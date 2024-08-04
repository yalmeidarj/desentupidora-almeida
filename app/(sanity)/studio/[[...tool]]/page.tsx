import { NextStudio } from "next-sanity/studio";
import AlertBanner from "@/app/(blog)/alert-banner";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import config from "@/sanity.config";

export const dynamic = "force-static";

export default function StudioPage() {

  return (
    <>
    {draftMode().isEnabled && <AlertBanner />}
    <NextStudio config={config} />                
                {draftMode().isEnabled && <VisualEditing />}
    </>
  );
}
