import Image from "next/image";
import SpecializationCard from "@/components/Section/SectionThree/SpecialisationCard";

export default function SectionThree() {
    return<>
    <div className={"flex mx-28 flex-col items-center"}>
        <p className={"font-medium text-5xl text-[#4C5856] text-center"}>Because We Offer What You Need <br/>
            at <span className={"text-[#008D8F]"}>every step</span> of your
            <span className={"text-[#008D8F]"}><br/>transformative learning journey</span></p>


    </div>
        <div>
            <div className={"mt-28 mx-12"}>
                <div className={" flex justify-end gap-96"}>
                    <div className={"relative after:left-1/2 after:absolute after:bg-[url(/images/Line-125.svg)] after:w-[3px] after:h-[1000]"}>

                    <Image src={"/images/Frame-1261152889.png"} alt={""}
                           width={500}
                           height={350}
                    />
                    </div>
                    <div>
                        <Image src={"/images/Ornament-122.jpg"} alt={""} height={201} width={80}/>
                    </div>
                </div>
            </div>
            
        </div>

        <div className={"flex justify-around bg-[url(/images/background-lines.svg)] "}>
            <div className={"flex flex-col gap-24"}>

                <SpecializationCard number={1} title={"Custom Specialization"} imagePath={"/images/Degree.svg"}
                                    description={"We understand the value of choice, so we empower you to design your course and select the specialization that best suits your goals."}/>
                <SpecializationCard number={3} title={"Custom Specialization"} imagePath={"/images/Degree.svg"}
                                    description={"We understand the value of choice, so we empower you to design your course and select the specialization that best suits your goals."}/>
                <SpecializationCard number={5} title={"Custom Specialization"} imagePath={"/images/Degree.svg"}
                                    description={"We understand the value of choice, so we empower you to design your course and select the specialization that best suits your goals."}/>

            </div>
            <div className={"flex flex-col gap-24 mt-12"}>

                <SpecializationCard number={2} title={"Custom Specialization"} imagePath={"/images/Degree.svg"}
                                    description={"We understand the value of choice, so we empower you to design your course and select the specialization that best suits your goals."}/>
                <SpecializationCard number={4} title={"Custom Specialization"} imagePath={"/images/Degree.svg"}
                                    description={"We understand the value of choice, so we empower you to design your course and select the specialization that best suits your goals."}/>
                <SpecializationCard number={6} title={"Custom Specialization"} imagePath={"/images/Degree.svg"}
                                    description={"We understand the value of choice, so we empower you to design your course and select the specialization that best suits your goals."}/>

            </div>
        </div>
    </>

}