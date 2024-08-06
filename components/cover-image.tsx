import { Image } from "next-sanity/image";
import { urlForImage } from "@/sanity/lib/utils";

interface CoverImageProps {
  image: any;
  priority?: boolean;
}

export default function CoverImage(props: CoverImageProps) {
  const { image: source, priority } = props;
  const image = source?.asset?._ref ? (
    <Image
      className="h-auto w-full"
      width={1200}
      height={800}
      alt={source?.alt || ""}
      src={urlForImage(source)?.height(800).width(1200).url() as string}
      sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
      priority={priority}
    />
  ) : (
    <div className="bg-slate-50" style={{ paddingTop: "66.66%" }} />
  );

  return (
    <div className="shadow-md transition-shadow duration-200 group-hover:shadow-lg sm:mx-0">
      {image}
    </div>
  );
}

