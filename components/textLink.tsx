import { cn } from "@/lib/utils";
import Link from "next/link";

export default function TextLink({
    href,
    children,
  className,
}: {
        href: string;
        children: string;
  className?: string;
}) {
  return (
      <Link
          href={href}
      className={cn("text-darkTheme-bg font-semibold hover:text-darkTheme-accent hover:underline transition-colors duration-300", className)}
      aria-label={children}
      >
          {children}
    </Link>
  );
}