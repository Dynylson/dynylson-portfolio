import Link from "next/link";

type CardProjectProps = {
    title: string;
    description: string;
}

const CardProject = ({ title, description }: CardProjectProps) => {
    const maxDescriptionLength = 121;
    
    const truncatedDescription = description.length > maxDescriptionLength
        ? description.slice(0, maxDescriptionLength) + '...'
        : description;

    return (
        <Link href="" className="hover:bg-green transition-default rounded-lg bg-zinc border-2 border-zinc-900 shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-4 py-3">
            <h2 className="font-bold text-lg md:text-xl">{title}</h2>
            <p className="text-sm md:text-base text-zinc-500 overflow-hidden max-h-20">{truncatedDescription}</p>
        </Link>
    )
}

export default CardProject;
