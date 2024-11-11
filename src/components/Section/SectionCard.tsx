import Image from "next/image";

export default function SectionCard({imagePath,title,description}:{imagePath:string,title:string,description:string}) {
    return <div className={"flex px-8 py-5 flex-col gap-y-7 items-start justify-center bg-white rounded-2xl"}>
        <div>
            <Image src={imagePath} alt={title}
            height={130} width={120}
            />

        </div>
        <div>
            <p className={"text-2xl font-normal text-[#2B95ED]"}>{title}</p>
        </div>
        <div>
            <p >{description}</p>
        </div>
    </div>
}