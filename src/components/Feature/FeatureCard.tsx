import Image from "next/image";

export default function FeatureCard({imagePath,title,title2}:{imagePath:string,title2?:string,title:string,gradient:string}) {
    return (
        <div className={" gap-x-5 border-[2px] peer-[]: rounded-xl px-10 py-4 border-[#2B95ED] grid grid-cols-2 grid-rows-2"}>
<div className={`row-span-2 rounded-full bg-gradient-to-tr from-[#FFFFFF4D] to-[#1DDDDF36]`}>

            <Image src={imagePath} alt={""} height={100} width={65} />
</div>
            <div >
               <p className={"text-[#2B95ED] font-bold lg:text-xl text-2xl"}>

                {title}
               </p>
            </div>
            <div>
                <p className={"text-[#2B95ED] font-bold lg:text-xl text-2xl"}>

                {title2}
                </p>
            </div>

        </div>
    )
}