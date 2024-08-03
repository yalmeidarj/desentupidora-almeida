import { BsInfoSquare } from 'react-icons/bs';
import { MdOutlinePlumbing, MdOutlineMapsHomeWork } from 'react-icons/md';
import { RiContactsBookUploadLine } from 'react-icons/ri';
import { SlHome } from 'react-icons/sl';
import { FiMenu as Icon } from 'react-icons/fi';
import { FaBlog, FaUser } from 'react-icons/fa';


export const navItems = [
    { name: "Home", route: "/", icon: <SlHome /> },
    { name: "Serviços", route: "/serviços", icon: <MdOutlinePlumbing /> },
    { name: "Onde Atendemos", route: "/onde-atendemos", icon: <MdOutlineMapsHomeWork /> },
    { name: "Sobre nós", route: "/sobre-a-desentupidora-renovo", icon: <BsInfoSquare /> },
    { name: "Contato", route: "/fale-com-a-desentupidora-renovo", icon: <RiContactsBookUploadLine /> },
    { name: "Blog", route: "/blog", icon: <FaBlog /> },
]