import CardProject from "@/components/card-project";
import CardTool from "@/components/card-tool";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <main className="max-w-[1120px] mx-auto mt-5 px-5 mb-4">
      <div className="mt-12 md:mt-24">
        <div className="flex items-center gap-3 md:gap-6">
          <Image className="rounded-xl h-[85px] w-[120px] md:h-[150px] md:w-[150px]" src="/me.jpeg" width={140} height={140} alt="" />
          <div className="flex flex-col gap-1 md:gap-2">
            <h2 className="font-bold text-xl md:text-2xl">Dynylson Júnior</h2>
            <p className="text-zinc-500 text-sm md:text-base font-medium">Desenvolvedor Full-Stack, focado em Java, C# e Next.js</p>
          </div>
        </div>
        <div className="mt-6 flex gap-6 md:gap-12 font-medium text-sm md:text-base">
          <Link className="flex items-center gap-2 hover:text-green transition-default" href="https://www.linkedin.com/in/dynylson-j%C3%BAnior-214298243/">
            <FaLinkedin size={24} />
            Linkedin
          </Link>
          <Link className="flex items-center gap-2 hover:text-green transition-default" href="https://github.com/Dynylson">
            <FaGithub size={24} />
            Github
          </Link>
          <Link className="flex items-center gap-2 hover:text-green transition-default" href="https://www.instagram.com/dynylsonj/">
            <FaInstagram size={24} />
            Instagram
          </Link>
        </div>
      </div>

      <div className="mt-12 md:mt-24 rounded-lg border-2 border-zinc-900 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 md:p-6">
        <h2 className="text-green font-bold text-lg md:text-xl mb-2">Sobre mim</h2>
        <p className="text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae labore laborum doloremque debitis sequi. Fugit architecto excepturi nihil! Tempore molestias itaque maxime ratione nam dolores hic mollitia architecto facilis eveniet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae labore laborum doloremque debitis sequi. Fugit architecto excepturi nihil! Tempore molestias itaque maxime ratione nam dolores hic mollitia architecto facilis eveniet.</p>
      </div>

      {/* Projetos & Stack */}
      <div className="grid md:grid-cols-2 gap-8 mt-12 md:mt-24">
        <div>
          <div className="flex items-center justify-between mb-3 md:mb-6">
            <h2 className="text-green font-bold text-xl md:text-2xl">🚀 Projetos</h2>
            <Link className="font-medium text-sm md:text-base hover:text-green transition-default" href="/projects">
              Ver mais
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <CardProject title="AVSFilms" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
            <CardProject title="Bikcraft" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
            <CardProject title="DSCommerce" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
          </div>
        </div>

        <div>
          <h2 className="text-green font-bold text-xl md:text-2xl">🔥 Tecnologias</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-3 md:mt-6">
            <CardTool label="React" img="/svg/react.svg" width={50} height={50} />
            <CardTool label="TypeScript" img="/svg/typescript.svg" width={50} height={50} />
            <CardTool label="Java" img="/svg/java.svg" width={50} height={50} />
            <CardTool label="Angular" img="/svg/angular.svg" width={50} height={50} />
            <CardTool label="PostgreSQL" img="/svg/postgres.svg" width={50} height={50} />
            <CardTool label="C#" img="/svg/csharp.svg" width={50} height={50} />
            <CardTool label=".NET" img="/svg/dotnet.svg" width={50} height={50} />
            <CardTool label="Linux" img="/svg/linux.svg" width={50} height={50} />
            <CardTool label="Spring" img="/svg/spring.svg" width={50} height={50} />
          </div>
        </div>
      </div>
    </main>
  );
}
