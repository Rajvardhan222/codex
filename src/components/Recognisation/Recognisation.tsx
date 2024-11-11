import Image from "next/image";

export default function Recognisation(){
    return <div className={" bg-[#C5E5FF33] flex justify-between items-center"}>
        <div className={"px-28"}>
            <Image src={"/images/Image-with-removed-background-(15)1.png"} alt={""} height={85} width={298}/>
        </div>
        <div className="flex flex-col flex-auto justify-between items-center border-l-2 border-r-2 border-[#53607B]" >
            <p className={""}>Recognised By</p>
            <Image src={"/images/India-NSDC-Logo-1.png"} alt={""} height={74} width={193}/>
        </div>
        <div className={"px-28"}>
            <Image src={"/images/Startup-India-Entrepreneurship-1.png"} alt={""} height={127} width={221}/>
        </div>
    </div>
}