import Image from "next/image";

export default function NewsCard({logo,date,imagePath,title}:{logo:string,date:string,imagePath:string,title:string}) {
    return <div className={"flex flex-col px-10 gap-7 items-center  shadow-xl rounded-lg bg-white "}>
        <div className={"flex w-full px-7 justify-between items-center"}>
            <div>
                <Image src={logo} alt={logo} height={36} width={151}/>
            </div>
            <div>
                {date}
            </div>
        </div>
        <div className={"rounded-lg"}>
            <Image src={imagePath} alt={""} height={231} width={336}/>
        </div>
        <div className={'p-'}>
            {title}
        </div>
        <div className={"flex text-blue-500 justify-between items-center"}>
            <p className={"text-blue-500 font-semibold text-lg"}>Read More</p>

        </div>
    </div>
}