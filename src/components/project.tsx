import Image from "next/image";
import { FaGithub, FaChrome } from "react-icons/fa";
  
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
        <div className="text-left grid md:grid-cols-2 p-4 transition-default rounded-lg bg-zinc border-2 border-zinc-900 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
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
                    <Link className="flex gap-2 bg-zinc-800 p-2 rounded-lg hover:bg-green transition-default" href={website} target="_blank">
                        <div className="flex gap-2 mx-auto">
                            <FaChrome size={24} />
                            Site
                        </div>
                    </Link>
                    <Link className="flex gap-2 bg-zinc-800 p-2 rounded-lg hover:bg-green transition-default" href={repository} target="_blank">
                        <div className="flex gap-2 mx-auto">
                            <FaGithub size={24} />
                            Repositório
                        </div>
                    </Link>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 bg-blue mb-2 transition-default">
                    {stack.map((tool, i) => {
                        return <p key={i} className="font-medium bg-zinc-800 hover:bg-green rounded-lg p-2 transition-default">{tool}</p>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Project;