import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Project = () => {
    return (
        <div className="flex gap-4 hover:bg-green transition-default rounded-lg bg-zinc border-2 border-zinc-900 shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer">
            <Image 
            className="hidden md:block rounded-l-lg md:w-[150px] md:h-[150px] w-[70px] h-[70px]"
            src="/californication_photo.jpg" 
            width={150} 
            height={150} 
            alt="" />
            <div className="mt-2 ml-2 md:ml-0">
                <h2 className="font-bold text-lg md:text-xl">Californication</h2>
                <p className="text-sm md:text-base">Californication is the seventh studio album by the American rock band Red Hot Chili Peppers, released on June 8, 1999, on Warner Bros. Records. It was produced by Rick Rubin. Along with Blood Sugar Sex Magik, Californication is one of the band’s best selling albums.</p>
                <div className="flex gap-2 mt-4 mb-2">
                    <FaReact size={20} />
                    <SiTypescript size={20} />
                    <TbBrandNextjs size={20} />
                </div>
            </div>
        </div>
    )
}

export default Project;