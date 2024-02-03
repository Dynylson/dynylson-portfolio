import Link from "next/link";
import { BiCodeAlt } from "react-icons/bi";

const Header = () => {
    return (
        <div className="flex flex-wrap items-center justify-between">
            <div className="flex items-center gap-2 hover:text-green transition-default">
                <BiCodeAlt size={30} />
                <h1 className="font-bold text-xl md:text-2xl cursor-pointer">Júnior</h1>
            </div>
            <div>
                <nav className="flex items-center gap-4 md:gap-8 text-zinc-700 font-medium text-base md:text-lg">
                    <Link className="transition-default hover:text-green" href="/sobre">Sobre</Link>
                    <Link className="transition-default hover:text-green" href="/projetos">Projetos</Link>
                    <Link className="transition-default hover:text-green" href="/contato">Contato</Link>
                </nav>
            </div>
        </div>
    )
}

export default Header;