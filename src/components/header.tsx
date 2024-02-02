import Link from "next/link";
import { PiCodeSimpleFill } from "react-icons/pi";

const Header = () => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                <PiCodeSimpleFill size={36}/>
                <h1 className="font-bold text-2xl">Júnior</h1>
            </div>
            <div>
                <nav className="flex items-center gap-8 text-zinc-700 font-medium text-lg">
                    <Link className="transition duration-150 ease-in hover:text-zinc-500" href="/sobre">Sobre</Link>
                    <Link className="transition duration-150 ease-in hover:text-zinc-500" href="/projetos">Projetos</Link>
                    <Link className="transition duration-150 ease-in hover:text-zinc-500" href="/contato">Contato</Link>
                </nav>
            </div>
        </div>
    )
}

export default Header;