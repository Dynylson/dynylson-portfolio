import Image from "next/image";
import { FaReact, FaGithub, FaChrome } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover";
  
import Link from "next/link";

type ProjectProps = {
    img: string;
    title: string;
    description: string;
    stack: string[];
    repository: string;
    website: string;
}

const Project = ({ img, title, description, stack, repository, website }: ProjectProps) => {
    return (
        <Popover>
            <PopoverTrigger>
                <div className="text-left grid md:grid-cols-2 p-4 hover:border-green transition-default rounded-lg bg-zinc border-2 border-zinc-900 shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer">
                    <Image 
                    className="md:block object-cover rounded-lg md:w-[480px] md:h-[255px] w-full h-full"
                    src={img}
                    width={480} 
                    height={255} 
                    alt="" />
                    <div className="mt-2 ml-2 md:ml-0">
                        <h2 className="font-bold text-lg md:text-xl">{title}</h2>
                        <p className="text-sm md:text-base">{description}</p>
                        <div className="grid grid-cols-2 gap-2 mt-4">
                            <Link className="flex gap-2 bg-zinc-800 p-2 rounded-lg hover:bg-green transition-default" href="/" target="_blank">
                                <div className="flex gap-2 mx-auto">
                                    <FaChrome size={24} />
                                    Site
                                </div>
                            </Link>
                            <Link className="flex gap-2 bg-zinc-800 p-2 rounded-lg hover:bg-green transition-default" href="/" target="_blank">
                                <div className="flex gap-2 mx-auto">
                                    <FaGithub size={24} />
                                    Repositório
                                </div>
                            </Link>
                        </div>
                        <div className="flex gap-2 mt-4 bg-blue mb-2">
                            <FaReact size={20} />
                            <SiTypescript size={20} />
                            <TbBrandNextjs size={20} />
                        </div>
                    </div>
                </div>
            </PopoverTrigger>
            <PopoverContent>
                <div className="flex gap-4">
                    <Link className="flex gap-2 hover:text-green transition-default" href="/" target="_blank">
                        <FaChrome size={24} />
                        Site
                    </Link>
                    <Link className="flex gap-2 hover:text-green transition-default" href="/" target="_blank">
                        <FaGithub size={24} />
                        Repositório
                    </Link>
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default Project;