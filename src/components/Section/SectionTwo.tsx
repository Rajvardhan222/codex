import TrainingCardTwo from "@/components/Section/TrainingCardTwo";
import InovationText from "@/components/Section/InovationText";

export default function SectionTwo() {
    return <div className={" w-screen bg-[url(/images/sl_031420_28950_12-3.jpg)] bg-no-repeat flex flex-col items-center "}>
        <div className={"mx-28 mt-7 flex justify-center items-center"}>
            <p className={"relative py-16  before:content-['']  before:bg-[url(/images/Ornament-115.svg)] before:inset-1 before:bottom-0   before:absolute before:bg-no-repeat before:w-52 before:h-52 font-medium text-5xl  text-center text-[#4C5856] "}>Check out our <span className={"text-[#008D8F]"}>holistic programs</span>  designed
                to help you reach your <span className={"text-[#008D8F]"}>goals</span></p>
        </div>

        <div className={"w-1/2 flex flex-col items-center gap-10"}>
            <div className={"relative before:absolute  before:h-32  before:w-32 before:bg-[url(/images/Ornament-86.svg)] before:-top-16 before:-z-10 before:-right-16 "}>

            <TrainingCardTwo imagePath={"/images/image.jpg"} title={"Campus Training"} info={"For students| 24+ Modules | 10 instructors"} description={"The app features in-app coding, eliminating the need for laptops. With cloud-based virtual machines and labs, students can practice freely, cutting hardware and maintenance costs."}/>
            </div>
            <div className={"relative before:absolute  before:h-32  before:w-32 before:bg-[url(/images/Ornament-86.svg)] before:-bottom-16 before:-z-10 before:-right-16 "}>

            <TrainingCardTwo imagePath={"/images/image-112.jpg"} title={"Campus Training"} info={"For students| 24+ Modules | 10 instructors"} description={"The app features in-app coding, eliminating the need for laptops. With cloud-based virtual machines and labs, students can practice freely, cutting hardware and maintenance costs."}/>
            </div>


        </div>

        <div className={"p-24"}>
            <InovationText/>
        </div>
    </div>
}