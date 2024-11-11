import NewsCard from "@/components/Section/NewsSection/NewsCard";

export default function NewsSection() {
    return <div className={" p-7 mx-28 flex flex-col items-center mt-32"}>
        <div>
            <p className={"font-medium text-5xl text-[#4C5856]"}>We’ve also been in <span className={"text-[#008D8F]"}>News!</span></p>
        </div>

        <div className={'flex mt-14 justify-around gap-x-7 '}>
            <NewsCard logo={"/images/image 113.png"} date={'31 March, 2023'} imagePath={'/images/Coding-Jr-CEO-Sumit-Bhat-Times 40 Under 40.jpg'} title={'Coding Jr’s CEO, Sumit Bhat felicitated at Times 40 Under 40'}/>
            <NewsCard logo={"/images/image 113.png"} date={'31 March, 2023'} imagePath={'/images/Coding-Jr-CEO-Sumit-Bhat-Times 40 Under 40.jpg'} title={'Coding Jr’s CEO, Sumit Bhat felicitated at Times 40 Under 40'}/>
            <NewsCard logo={"/images/image 113.png"} date={'31 March, 2023'} imagePath={'/images/Coding-Jr-CEO-Sumit-Bhat-Times 40 Under 40.jpg'} title={'Coding Jr’s CEO, Sumit Bhat felicitated at Times 40 Under 40'}/>
        </div>
    </div>
}