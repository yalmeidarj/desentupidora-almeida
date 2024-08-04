import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail, CiPhone } from "react-icons/ci";
import { subLinks, areaAtendimento } from "./const";

export default function Footer() {

    // get the current year
    const currentYear = new Date().getFullYear();


    return (
        <footer className="w-full space-y-4 bg-darkTheme-secondary text-darkTheme-muted pt-6">
            <div className="container mx-auto grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-3 ">
                <div className="flex flex-col items-start gap-4">
                    <Link href="#" className="flex items-center" aria-label="Acme Inc logo" prefetch={false}>
                        <Image
                            src="/logo-desentupidora-light.png"
                            alt="Desentupidora Almeida"
                            width={140}
                            height={140}
                            className="rounded-full"
                        >

                        </Image>
                        {/* <span className="text-lg font-semibold">Desentupidora Almeida</span> */}
                    </Link>

                    <div className="flex items-center gap-3">
                        <Link href="tel:+552140421046" aria-label="Telefone" className="text-darkTheme-text bg-darkTheme-bg hover:bg-darkTheme-accent transition-colors duration-300 p-2 rounded" prefetch={false}>
                            <CiPhone className="h-5 w-5" />
                        </Link>
                        <Link href="https://wa.me/5521966495454" aria-label="Whatsapp" className="text-darkTheme-text bg-darkTheme-bg hover:bg-darkTheme-accent transition-colors duration-300 p-2 rounded" prefetch={false}>
                            <FaWhatsapp className="h-5 w-5" />
                        </Link>
                        <Link href="mailto:desentupidorarenovo.rj@gmail.com" aria-label="Email" className="text-darkTheme-text bg-darkTheme-bg hover:bg-darkTheme-accent transition-colors duration-300 p-2 rounded" prefetch={false}>
                            <CiMail className="h-5 w-5" />
                        </Link>
                    </div>

                </div>
                <div className=" grid grid-cols-1 gap-6">
                    {subLinks.map((subLink) => (
                        <SubLink key={subLink.title} title={subLink.title} links={subLink.links} />
                    ))}
                </div>
                <div className="">
                <p className="text-darkTheme-text">
                    Nós resolvemos qualquer tipo de entupimento para você
                </p>
                </div>
                {/* <div className="space-y-4">                    
                    <form className="flex gap-2">
                        <Input type="text" placeholder="Buscar por termo" className="flex-1" />
                        <Button type="submit">Procurar</Button>
                    </form>
                    <p className="text-xs text-darkTheme-text">Ainda não encontrou? Procure em nosso site</p>
                </div> */}
            </div>
            <AreaAtendimento />
            <div className="container mx-auto mt-12 flex flex-col items-center justify-between gap-4 text-xs text-darkTheme-text md:flex-row ">
                <p>&copy; {currentYear.toLocaleString()} All rights reserved.</p>
                <nav className="flex items-center gap-4">
                    <Link href="#" className="hover:text-primary transition-colors" prefetch={false}>
                        Privacy Policy
                    </Link>
                </nav>
                {/* <p>Made with ❤️in NYC © 2024 Codecademy</p> */}
                <p
                    className="text-lg"
                >🖮 <Link
                    className="text-xs"
                    target="_blank" rel="noopener noreferrer"
                    href="https://yalmeida.vercel.app">Check the dev</Link> </p>
            </div>
        </footer>
    );
}

type SubLinkProps = {
    title: string;
    links: { title: string; url: string }[];
};

function SubLink({ title, links }: SubLinkProps) {
    return (
        <div className="">
            <h4 className="text-sm font-medium text-darkTheme-primary">{title}</h4>
            <nav className="space-x-2">
                {links.map((link) => (
                    <Link key={link.title} href={link.url} className="text-sm text-darkTheme-text hover:text-darkTheme-outerWave transition-colors" prefetch={false}>
                        {link.title}
                    </Link>
                ))}
            </nav >
        </div>
    );
}

function AreaAtendimento() {
    return (
        <div className="container mx-auto flex flex-col items-center gap-4">
            <h4 className="text-sm font-bold text-darkTheme-primary">Desentupimos 24h no RJ</h4>
            <ol className="flex flex-wrap gap-2">
            {areaAtendimento.map((area: string) => (
                <li key={area} className="text-xs text-darkTheme-text">{area}</li>
            ))}
            </ol>
        </div>
    );
}