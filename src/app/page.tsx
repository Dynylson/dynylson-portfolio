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
          <Link className="flex items-center gap-2 hover:text-green transition-default" href="https://www.linkedin.com/in/dynylson-j%C3%BAnior-214298243/" target="_blank">
            <FaLinkedin size={24} />
            Linkedin
          </Link>
          <Link className="flex items-center gap-2 hover:text-green transition-default" href="https://github.com/Dynylson" target="_blank">
            <FaGithub size={24} />
            Github
          </Link>
          <Link className="flex items-center gap-2 hover:text-green transition-default" href="https://www.instagram.com/dynylsonj/" target="_blank">
            <FaInstagram size={24} />
            Instagram
          </Link>
        </div>
      </div>

      <div className="mt-12 md:mt-24 rounded-lg border-2 border-zinc-900 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 md:p-6">
        <h2 className="text-green font-bold text-lg md:text-xl mb-2">Sobre mim</h2>
        <p className="text-sm md:text-base">Com ampla experiência em programação, mergulhei no estudo e na prática de diversas linguagens, frameworks e metodologias de desenvolvimento ao longo dos anos. Atualmente, como desenvolvedor de software, aplico meu conhecimento para criar soluções ideais que abordam necessidades e resolvem problemas de forma eficaz. Estou determinado a levar minha carreira para o próximo nível, buscando constantemente desafios que me permitam crescer e me destacar no campo da tecnologia.</p>
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
            <CardProject title="AVSFilms" description="Fique a par de todo o universo cinematográfico, desde os filmes do momento até aos que estarão em breve nas telas. Tudo isso e mais num só lugar!" />
            <CardProject title="Bikcraft" description="Bicicletas elétricas de alta precisão e qualidade, feitas sob medida para você. Explore o mundo na sua velocidade com a Bikcraft." />
            <CardProject title="AvaliaOVO" description="AvaliaOVO é um sistema web para avaliação de ovos de galinho para o departamento de avicultura da UFAPE desenvolvido com Laravel que eu ajudei a criar através da bolsa de iniciação científica da Universidade Federal do Agreste de Pernambuco (UFAPE)" />
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
