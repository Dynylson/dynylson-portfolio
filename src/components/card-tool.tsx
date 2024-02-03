import Image from "next/image";

type CardToolProps = {
    img: string;
    width: number;
    height: number;
}

const CardTool = ({ img, width, height }: CardToolProps) => {
    return (
        <div className="hover:bg-green transition-default rounded-lg bg-zinc border-2 border-zinc-900 shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-4 py-3">
            <Image className="mx-auto" src={img} width={width} height={height} alt="" />
        </div>  
    )
}

export default CardTool;