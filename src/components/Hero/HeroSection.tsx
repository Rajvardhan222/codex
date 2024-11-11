import Image from "next/image";
import Training from "@/components/Hero/Training";

export default function HeroSection() {
    return (<div className={"grid grid-cols-2 gap-7 grid-rows-1"}>

<div >

            <Image src={"/images/iMacmockup2.png"} alt={"I mac"} height={484} width={626}/>
</div>

            <div
                className={" grid grid-cols-2 grid-rows-3 gap-x-5"}
            >


                    <p className={"col-span-2 h-24 lg:text-6xl  font-galleon font-normal  text-7xl text-[#4C5856]"}>Where The World
                        Learns To Code</p>

                <div className={"row-span-2"}>
                    <Training imagePath={"images/University.svg"} title={"Campus Training"}
                              description={"Designed for college students with a focus on xyz, xyz, xyz Lorem ipsum dolor "}
                              buttonTarget={""}/>

                </div>
                <div className={"row-span-2"}>
                    <Training imagePath={"images/Office.svg"} title={"Professional Training"}
                              description={"Designed for college students with a focus on xyz, xyz, xyz Lorem ipsum"}
                              buttonTarget={""}/>
                </div>
            </div>

        </div>)
}