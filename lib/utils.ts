import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const servicesList = [
  {
    title: "Desentupimento Comercial",
    url: "/desentupimentos/desentupimento-comercial",
  },
  {
    title: "Desentupimento Residencial",
    url: "/desentupimentos/desentupimento-residencial",
  },
  {
    title: "Desentupimento Emergencial",
    url: "/desentupimentos/desentupimento-emergencial",
  },
  {
    title: "Desentupimento de Esgoto",
    url: "/desentupimentos/desentupimento-de-esgoto",
  },
  {
    title: "Desentupimento de Pia",
    url: "/desentupimentos/desentupimento-de-pia",
  },
  {
    title: "Desentupimento de Vaso Sanitário",
    url: "/desentupimentos/desentupimento-de-vaso-sanitario",
  },
  {
    title: "Ralo Entupido",
    url: "/desentupimentos/desentupimento-de-ralo-entupido",
  },
  {
    title: "Desentupimento de Caixa de Gordura",
    url: "/desentupimentos/desentupimento-de-caixa-de-gordura",
  },
];

