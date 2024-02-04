import Project from "@/components/project";

const ProjectsPage = () => {
    return (
        <main className="max-w-[1120px] mx-auto mt-5 px-5 mb-4">
            <div className="flex flex-col gap-4 mt-12 md:mt-24">
                <Project img="/californication_photo.jpg" title="Californication" description="Californication is the seventh studio album by the American rock band Red Hot Chili Peppers, released on June 8, 1999, on Warner Bros. Records. It was produced by Rick Rubin. Along with Blood Sugar Sex Magik, Californication is one of the band’s best selling albums." />
                <Project img="/projects/avs-films.png" title="AVSFilms" description="Californication is the seventh studio album by the American rock band Red Hot Chili Peppers, released on June 8, 1999, on Warner Bros. Records. It was produced by Rick Rubin. Along with Blood Sugar Sex Magik, Californication is one of the band’s best selling albums." />
                <Project img="/californication_photo.jpg" title="Californication" description="Californication is the seventh studio album by the American rock band Red Hot Chili Peppers, released on June 8, 1999, on Warner Bros. Records. It was produced by Rick Rubin. Along with Blood Sugar Sex Magik, Californication is one of the band’s best selling albums." />
            </div>
        </main>
    )
}

export default ProjectsPage;