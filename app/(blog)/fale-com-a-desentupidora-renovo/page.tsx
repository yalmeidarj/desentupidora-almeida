import CallLandLineButton from "@/components/CallLandLineButton";
import Link from "next/link";

export default async function Page() {
    return (
        <section className="text-gray-400  body-font relative mt-16">
            <div className=" px-5 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2  rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe
                        width="100%"
                        height="100%"
                        title="map"
                        className="absolute inset-0"
                        scrolling="no"
                        style={{ filter: 'grayscale(0.5)', opacity: '8' }}
                        src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Rio%20de%20Janeiro&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                    >
                    </iframe>
                    <div className="bg-darkTheme-secondary text-darkTheme-text relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">ENDEREÇO</h2>
                            <p className="mt-1">Atendendo todo Rio de Janeiro</p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2>
                            <Link
                                href="mailto:desentupidorarenovo@gmail.com"                                
                                className="text-indigo-400 leading-relaxed">desentupidorarenovo@gmail.com</Link>
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">TELEFONE</h2>
                            {/* <p className="leading-relaxed">123-456-7890</p> */}
                            <CallLandLineButton
                                phoneNumber="3386-9760"
                            />
                        </div>
                    </div>
                </div>
                <div className="bg-darkTheme-secondary rounded-lg p-2 lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-white text-lg mb-1 font-medium title-font">Atendimento 24 horas</h2>
                    <p className="leading-relaxed mb-5">Envie-nos uma mensagem e entraremos em contato o mais rápido possível.</p>
                    <div className="relative mb-4">
                        <label  className="leading-7 text-sm text-gray-400">Nome</label>
                        <input type="text" id="name" name="name" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                    </div>
                    <div className="relative mb-4">
                        <label  className="leading-7 text-sm text-gray-400">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                    </div>
                    <div className="relative mb-4">
                        <label  className="leading-7 text-sm text-gray-400">Messagem</label>
                        <textarea id="message" name="message" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Enviar</button>
                    
                </div>
            </div>
        </section>
    )
}
