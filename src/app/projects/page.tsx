import Project from "@/components/project";

const ProjectsPage = () => {
    return (
        <main className="max-w-[1120px] mx-auto mt-5 px-5 mb-4">
            <div className="flex flex-col gap-4 mt-12 md:mt-24">
                <Project />
                <Project />
                <Project />
            </div>
        </main>
    )
}

export default ProjectsPage;