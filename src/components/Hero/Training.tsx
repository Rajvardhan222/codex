import Image from "next/image";
import Button from "@/components/button/Button";

export default  function Training({imagePath,title,description}:{imagePath:string,title:string,description:string,buttonTarget:string,}) {
    return (
        <div className={"my-5 border-2 border-transparent text-center gap-y-7 p-4 custom-gradient-border rounded-lg  flex flex-col items-center "}>
            <Image src={imagePath} alt={""} height={58} width={54}/>
            <p className={"text-[#1C408E] font-medium text-xl"}>{title}</p>
            <p className={"text-[#4C5856] font-normal text-sm"}>
                {description}
            </p>
            <Button content={"Explore"} style={"Secondary"}/>
        </div>
    )
}