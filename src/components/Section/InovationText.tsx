import Image from "next/image";

export default function InovationText() {
    return <div className={"flex justify-around items-center gap-12"}>
        <div>
            <Image src={"/images/Ornament-117.svg"} alt={""} height={155} width={135} />
        </div>
        <div className={"text-4xl font-medium text-center"}>
            Our efforts to innovate have been <br/>recognized and appreciated
        </div>
        <div>
            <Image src={"/images/Ornament-119.svg"} alt={""} height={155} width={135} />
        </div>
    </div>
}