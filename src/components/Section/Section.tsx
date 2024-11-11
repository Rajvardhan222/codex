import SectionCard from "@/components/Section/SectionCard";

export default  function Section() {
    return <div className={" relative w-screen pb-7 bg-gradient-to-r from-[#2B95ED] to-[#185587]"}>
        <div className={"absolute w-16 h-16  bg-[url(/images/Ornament-85.svg)] bg-no-repeat bg-contain top-20 right-32"}></div>
        <div className={"absolute w-32 h-32  bg-[url(/images/Ornament-120.svg)] bg-no-repeat bg-contain top-32 right-56"}></div>
        <div className={"absolute w-28 h-28  bg-[url(/images/Ornament-121.svg)] bg-no-repeat bg-contain bottom-32 left-72"}></div>

        <div className={"px-24 py-20"}>
            <div className={"text-white font-semibold text-6xl"}>What sets us apart?</div>
        </div>
        <div className={"grid gap-14 mx-16 grid-cols-3 grid-rows-2"}>
            
            <SectionCard imagePath={"/images/Graduation-Invitation.png"} title={"Created by IIT-IIM Alumni"} description={"We’ve learnt from the best and strive to bring you the best."}/>
            <SectionCard imagePath={"/images/Graduation-Invitation.png"} title={"Created by IIT-IIM Alumni"} description={"We’ve learnt from the best and strive to bring you the best."}/>
            <SectionCard imagePath={"/images/Graduation-Invitation.png"} title={"Created by IIT-IIM Alumni"} description={"We’ve learnt from the best and strive to bring you the best."}/>
            <SectionCard imagePath={"/images/Graduation-Invitation.png"} title={"Created by IIT-IIM Alumni"} description={"We’ve learnt from the best and strive to bring you the best."}/>
            <SectionCard imagePath={"/images/Graduation-Invitation.png"} title={"Created by IIT-IIM Alumni"} description={"We’ve learnt from the best and strive to bring you the best."}/>
            <SectionCard imagePath={"/images/Graduation-Invitation.png"} title={"Created by IIT-IIM Alumni"} description={"We’ve learnt from the best and strive to bring you the best."}/>
        </div>

    </div>
}