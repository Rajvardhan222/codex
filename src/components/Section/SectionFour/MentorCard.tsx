import Image from "next/image";

export default function MentorCard({imagePath,style,name,title,position,description}: {imagePath:string,style:string,name:string,title:string,position:string,description:string,}) {
    // @ts-ignore
    // @ts-ignore
    return <div className={`bg-gradient-to-b ${style} h-1/4 w-[405px] relative after:absolute after:w-20 after:h-20 after:bg-[url(/images/Subtract.svg)] after:z-50 after:top-0 after:-right-3 after:bg-no-repeat  `}>
        <p className={"text-white text-2xl font-semibold relative top-20 right-24 text-center "}>{name}</p>
        <div className={""}>

            <Image src={imagePath} alt={"Image of prof " + name} height={408} width={612}/>
        </div>
        <div className="relative z-50 h-32 bg-gradient-to-b from-[#66666680] to-[#00000080] p-3 text-white">

            <div className="absolute top-[-6rem] right-0 w-full h-56 bg-[#00000080] p-4 z-0">
                <div className="text-xl font-semibold">{title}</div>
                <div className="text-lg">{position}</div>
            </div>


            <div className={"z-40"}>{description}</div>
        </div>


    </div>
}