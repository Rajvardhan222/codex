import Image from "next/image";
import Button from "@/components/button/Button";

export  default function TrainingCardTwo({imagePath,title,info,description}: {imagePath:string,title:string,info:string,description:string}) {
    return <div className={"grid bg-white  shadow-lg  gap-7 grid-cols-2  auto-rows-min p-4 rounded-lg"}>
        <div className={"rounded-lg row-span-4"}>
            <Image src={imagePath} alt={""} width={450} height={343}/>
        </div>
        <div>
            <p className={"font-semibold text-3xl"}>{title}</p>
        </div>
        <div className={"text-[#5B5B5B] font-medium text-2xl"}>{info}</div>
        <div className={"text-[#3B3A3A]"}>{description}</div>
        <div className={"justify-end"} ><Button content={"Explore"} style={"Secondary"}/></div>

    </div>
}