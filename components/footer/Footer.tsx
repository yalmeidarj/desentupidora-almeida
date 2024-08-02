import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail, CiPhone } from "react-icons/ci";


export default function Footer() {

    // get the current year
    const currentYear = new Date().getFullYear();
    const subLinks = [
        {
            title: "Sobre nós",
            links: [{
                title: "Sobre a Desentupidora",
                url: "#"
            },
            {
                title: "Blog",
                url: "#"
            },
            {
                title: "Contato",
                url: "/contact"
            }],
        },
        {
            title: "Áreas de Atendimento",
            links: [
                {
                    title: "Zona Norte",
                    url: "#"
                },
                {
                    title: "Zona Sul",
                    url: "#"
                },
                {
                    title: "Zona Leste",
                    url: "#"
                },
                {
                    title: "Zona Oeste",
                    url: "#"
                },
            ],
        },
        {
            title: "Nossos Serviços",
            links: [{
                title: "Desentupimento Comercial",
                url: "#"
            },
                {
                    title: "Desentupimento Residencial",
                    url: "#"
                },
                {
                    title: "Desentupimento Emergencial",
                    url: "#"
                },

            ]
        }
    ];

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
                    <p className="text-darkTheme-text">
                        Nós resolvemos qualquer tipo de entupimento para você
                    </p>
                    <div className="flex items-center gap-3">
                        <Link href="#" aria-label="Twitter" className="text-darkTheme-text bg-darkTheme-bg hover:bg-darkTheme-accent transition-colors duration-300 p-2 rounded" prefetch={false}>
                            <CiPhone className="h-5 w-5" />
                        </Link>
                        <Link href="#" aria-label="GitLab" className="text-darkTheme-text bg-darkTheme-bg hover:bg-darkTheme-accent transition-colors duration-300 p-2 rounded" prefetch={false}>
                            <FaWhatsapp className="h-5 w-5" />
                        </Link>
                        <Link href="#" aria-label="LinkedIn" className="text-darkTheme-text bg-darkTheme-bg hover:bg-darkTheme-accent transition-colors duration-300 p-2 rounded" prefetch={false}>
                            <CiMail className="h-5 w-5" />
                        </Link>
                    </div>

                </div>
                <div className=" grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-1">
                    {subLinks.map((subLink) => (
                        <SubLink key={subLink.title} title={subLink.title} links={subLink.links} />
                    ))}
                </div>
                <div className="space-y-4">
                    {/* <h4 className="text-sm font-medium">Buscar por termo</h4> */}
                    <form className="flex gap-2">
                        <Input type="text" placeholder="Buscar por termo" className="flex-1" />
                        <Button type="submit">Procurar</Button>
                    </form>
                    <p className="text-xs text-darkTheme-text">Ainda não encontrou? Procure em nosso site</p>
                </div>
            </div>
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

function GitlabIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
        </svg>
    )
}


function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    )
}


function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}


function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
    )
}