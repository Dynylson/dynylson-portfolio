import Project from "@/components/project";

const ProjectsPage = () => {
    return (
        <main className="max-w-[1120px] mx-auto mt-5 px-5 mb-4">
            <div className="flex flex-col gap-4 mt-12 md:mt-24">
                <Project repository="https://github.com/Dynylson/AVSFilms" website="https://avs-films.vercel.app/" img="/projects/avs-films.png" stack={["React.js", "Next.js", "TypeScript", "Chakra UI"]} title="AVSFilms" description="Fique a par de todo o universo cinematográfico, desde os filmes do momento até aos que estarão em breve nas telas. Tudo isso e mais num só lugar!" />
                <Project repository="https://github.com/Dynylson/bikcraft" website="https://dynylson.github.io/bikcraft/" img="/projects/bikcraft.png" stack={["HTML", "CSS", "JavaScript"]} title="Bikcraft" description="Bicicletas elétricas de alta precisão e qualidade, feitas sob medida para você. Explore o mundo na sua velocidade com a Bikcraft." />
                <Project repository="https://github.com/Dynylson" website="/" img="/californication_photo.jpg" stack={["React.js", "TypeScript", "Next.js"]} title="Californication" description="Californication is the seventh studio album by the American rock band Red Hot Chili Peppers, released on June 8, 1999, on Warner Bros. Records. It was produced by Rick Rubin. Along with Blood Sugar Sex Magik, Californication is one of the band’s best selling albums." />
            </div>
        </main>
    )
}

export default ProjectsPage;