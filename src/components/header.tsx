"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiCodeAlt } from "react-icons/bi";

const Header = () => {
    const pathname = usePathname();

    return (
        <div className="flex flex-wrap items-center justify-between max-w-[1120px] mx-auto mt-5 px-5 mb-4">
            <Link href="/">
                <div className="flex items-center gap-2 hover:text-green transition-default">
                    <BiCodeAlt size={30} />
                    <h1 className="font-bold text-xl md:text-2xl cursor-pointer">Júnior</h1>
                </div>
            </Link>
            <div>
                <nav className="flex items-center gap-4 md:gap-8 text-zinc-700 font-medium text-base md:text-lg">
                    <Link className={`transition-default hover:text-green ${pathname === '/' ? 'text-green' : ''}`} href="/">Início</Link>
                    <Link className={`transition-default hover:text-green ${pathname === '/projects' ? 'text-green' : ''}`} href="/projects">Projetos</Link>
                    <Link className={`transition-default hover:text-green ${pathname === '/contact' ? 'text-green' : ''}`} href="/contact">Contato</Link>
                </nav>
            </div>
        </div>
    )
}

export default Header;