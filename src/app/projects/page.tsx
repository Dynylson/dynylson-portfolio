import Project from "@/components/project";

const ProjectsPage = () => {
    return (
        <main className="max-w-[1120px] mx-auto mt-5 px-5 mb-4">
            <div className="flex flex-col gap-4 mt-12 md:mt-24">
                <Project repository="https://github.com/Dynylson/AVSFilms" website="https://avs-films.vercel.app/" img="/projects/avs-films.png" stack={["React.js", "Next.js", "TypeScript", "Chakra UI"]} title="AVSFilms" description="Fique a par de todo o universo cinematográfico, desde os filmes do momento até aos que estarão em breve nas telas. Tudo isso e mais num só lugar!" />
                <Project repository="https://github.com/Dynylson/bikcraft" website="https://dynylson.github.io/bikcraft/" img="/projects/bikcraft.png" stack={["HTML", "CSS", "JavaScript"]} title="Bikcraft" description="Bicicletas elétricas de alta precisão e qualidade, feitas sob medida para você. Explore o mundo na sua velocidade com a Bikcraft." />
                <Project repository="https://github.com/Dynylson" website="/" img="/projects/avaliaovo.png" stack={["Laravel", "PHP", "Bootstrap"]} title="AvaliaOVO" description="AvaliaOVO é um sistema web para avaliação de ovos de galinho para o departamento de avicultura da UFAPE desenvolvido com Laravel que eu ajudei a criar através da bolsa de iniciação científica da Universidade Federal do Agreste de Pernambuco (UFAPE)" />
            </div>
        </main>
    )
}

export default ProjectsPage;