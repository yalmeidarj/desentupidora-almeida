import { FaRegCheckCircle } from "react-icons/fa";
import TextLink from "./textLink";

export default function ListLink({ href, children }: { href: string; children: string }) {
    return (
        <li className="mb-2 list-none text-darkTheme-text ">
            <FaRegCheckCircle className="inline-block mr-2" />
            <TextLink
                className='text-darkTheme-text font-semibold hover:text-darkTheme-muted'
                href={href}>{children}</TextLink>
        </li>
    );
}