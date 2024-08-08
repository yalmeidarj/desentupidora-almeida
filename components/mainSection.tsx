import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

export default function MainSection() {
    return (
        <section className="w-full pb-3 md:pb-14">
            <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                        Desentupimento Rápido e Confiável
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Desentupidores com experiência e dedicados a fornecer serviços de qualidade para você e sua família. Desde emergências de desentupimento até reparos de encanamento, você pode contar conosco para resolver seus problemas de encanamento rapidamente.
                    </p>
                    <div className="flex flex-col text-darkTheme-text gap-2 min-[400px]:flex-row">
                        <Link
                            href="/desentupimentos"
                            className="px-2 py-3 rounded-md bg-darkTheme-bg"
                            aria-label="Conheça Nossos Serviços"
                            >
                            Conheça Nossos Serviços
                        </Link>
                        <Link
                            href="/rj"                            
                            className="px-2 py-3 rounded-md bg-darkTheme-accent "
                            aria-label="Estamos em todas a áreas do RJ. Veja mais"
                        >
                            Saiba mais
                        </Link>
                    </div>
                </div>
                <Image
                    src="/desentupidora-confiavel-n2.jpg"
                    width={550}
                    height={550}
                    sizes="(max-width: 768px) 100vw, 768px"
                    loading="eager"

                    alt="Técnico de desentupimento trabalhando em uma pia"
                    className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
                />
            </div>
        </section>
    )
}
