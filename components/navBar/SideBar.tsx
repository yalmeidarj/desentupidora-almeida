'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BsEnvelopeAt } from 'react-icons/bs'
import { navItems } from './navItems'



interface SidebarProps {
    show: boolean;
    setter: React.Dispatch<React.SetStateAction<boolean>>;
}

interface MenuItemProps {
    icon: React.ReactNode;
    name: string;
    route: string;
}

const SideBar: React.FC<SidebarProps> = ({ show, setter }) => {

    const pathname = usePathname();


    const className = "bg-darkTheme-bg border border-solid border-white w-[250px] transition-[margin-left] ease-in-out duration-500  top-0 bottom-0 right-0 ";
    // const className = "bg-black w-[250px] transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40";
    const appendClass = show ? " mr-0" : " mr-[-250px]";

    const MenuItem: React.FC<MenuItemProps> = ({ icon, name, route }) => {
        const colorClass = pathname === route ? "text-white" : "text-white/50 hover:text-white";

        return (
            <Link
                href={route}
                onClick={() => {
                    setter((oldVal) => !oldVal);
                }}
                className={`flex gap-1 [&>*]:my-auto text-md pl-6 py-3 border-b-[1px] border-b-white/10 ${colorClass}`}
            >
                <div className="text-xl flex [&>*]:mx-auto w-[30px]">
                    {icon}
                </div>
                <div>{name}</div>
            </Link>
        )
    }

    const ModalOverlay: React.FC = () => (
        <div
            className={`flex md:hidden fixed  mb-4 right-0  left-0 bg-black/50 z-20`}
            onClick={() => {
                setter(oldVal => !oldVal);
            }}
        />
    )

    return (
        <>
            <div className={`${className}${appendClass} mt-[112px] fixed flex flex-col justify-between `}>
                <div className="flex flex-col">{navItems.map((item, index) => (
                    <MenuItem
                        key={index}
                        name={item.name}
                        route={item.route}
                        icon={item.icon}
                    />
                ))}
                </div>
                <div className="mt-auto">
                    <MenuItem
                        name="Contato"
                        route="/fale-com-a-desentupidora-renovo"
                        icon={<BsEnvelopeAt />}
                    />
                </div>
                {/* </div> */}
            </div>
            {show ? <ModalOverlay /> : <></>}
        </>
    )
}

export default SideBar;