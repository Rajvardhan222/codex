import MentorCard from "@/components/Section/SectionFour/MentorCard";

export default function SectionFour() {
    return <div className={"flex bg-white text-center flex-col items-center mx-28"}>
        <div className={"p-32"}>
            <p className={"font-normal text-3xl text-[#4C5856]"}>We know just education is not enough anymore</p>
            <p className={"font-semibold text-5xl text-[#4C5856]"}>So we’ve got the best mentors for you. </p>
        </div>
        <div className={"p-4 flex gap-7 justify-around mx-28"}>
            <MentorCard imagePath={"/images/Image-with-removed-background-(11)-1.png"} style={"from-[#17C6D8] to-[#FAFAFA]"} name={"Vikas Shukla"} title={"Software Engineering"} position={"IIT-BHU"} description={"“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. “"}/>
            <MentorCard imagePath={"/images/Image-with-removed-background-(11)-1.png"} style={"from-[#17C6D8] to-[#FAFAFA]"} name={"Vikas Shukla"} title={"Software Engineering"} position={"IIT-BHU"} description={"“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. “"}/>
            <MentorCard imagePath={"/images/Image-with-removed-background-(11)-1.png"} style={"from-[#17C6D8] to-[#FAFAFA]"} name={"Vikas Shukla"} title={"Software Engineering"} position={"IIT-BHU"} description={"“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. “"}/>

        </div>
    </div>
}