import { BsInfoSquare } from 'react-icons/bs';
import { MdOutlinePlumbing, MdOutlineMapsHomeWork } from 'react-icons/md';
import { SlHome } from 'react-icons/sl';
import { FaBlog } from 'react-icons/fa';


export const navItems = [
    { name: "Home", route: "/", icon: <SlHome /> },
    { name: "Serviços", route: "/desentupimentos", icon: <MdOutlinePlumbing /> },
    { name: "Onde Atendemos", route: "/rj", icon: <MdOutlineMapsHomeWork /> },
    { name: "Sobre nós", route: "/sobre-a-desentupidora-renovo", icon: <BsInfoSquare /> },
    // { name: "Contato", route: "/fale-com-a-desentupidora-renovo", icon: <RiContactsBookUploadLine /> },
    { name: "Blog", route: "/blog", icon: <FaBlog /> },
]