import Image from "next/image";

export default function DownloadApp() {
    return <div className={'grid grid-cols-3 px-12 py-12'}>
        <div>
            <Image src={"/images/Frame 1261152892.png"} alt={""} height={85} width={270}/>

        </div>
        <div className={'grid grid-cols-2'}>
            <div className={"col-span-2 text-5xl text-[#4c5856] font-medium"}>
                Wanna see more?
                Join us !
            </div>

            <div className={'flex justify-around'}>
                <div>
                    <Image src={'/images/Glyph.svg'} alt={''} height={38} width={38}/>
                </div>
                <div>
                    <p className={'text-[#393939]'}>Recorded Lectures</p>
                </div>
            </div>
            <div className={'flex justify-around'}>
                <div>
                    <Image src={'/images/Glyph.svg'} alt={''} height={38} width={38}/>
                </div>
                <div>
                    <p className={'text-[#393939]'}>Recorded Lectures</p>
                </div>
            </div>
            <div className={'flex justify-around'}>
                <div>
                    <Image src={'/images/Glyph.svg'} alt={''} height={38} width={38}/>
                </div>
                <div>
                    <p className={'text-[#393939]'}>Recorded Lectures</p>
                </div>
            </div>
            <div className={'flex justify-around'}>
                <div>
                    <Image src={'/images/Glyph.svg'} alt={''} height={38} width={38}/>
                </div>
                <div>
                    <p className={'text-[#393939]'}>Recorded Lectures</p>
                </div>
            </div>
            <div className={'flex justify-around'}>
                <div>
                    <Image src={'/images/Glyph.svg'} alt={''} height={38} width={38}/>
                </div>
                <div>
                    <p className={'text-[#393939]'}>Recorded Lectures</p>
                </div>
            </div>
            <div className={'flex justify-around'}>
                <div>
                    <Image src={'/images/Glyph.svg'} alt={''} height={38} width={38}/>
                </div>
                <div>
                    <p className={'text-[#393939]'}>Recorded Lectures</p>
                </div>
            </div>
            <div className={'flex justify-around'}>
                <div>
                    <Image src={'/images/Glyph.svg'} alt={''} height={38} width={38}/>
                </div>
                <div>
                    <p className={'text-[#393939]'}>Recorded Lectures</p>
                </div>
            </div>
            <div className={'flex justify-around'}>
                <div>
                    <Image src={'/images/Glyph.svg'} alt={''} height={38} width={38}/>
                </div>
                <div>
                    <p className={'text-[#393939]'}>Recorded Lectures</p>
                </div>
            </div>
            <div className="col-span-2">
                <div className="relative flex items-center justify-between">
                    {/* Left icon */}
                    <span className="inline-block h-20 w-20 bg-no-repeat bg-[url('/images/Vectorleft.svg')]"></span>

                    {/* Text */}
                    <p className="text-[#747578]">50k+ Active Users</p>

                    {/* Right icon */}
                    <span className="inline-block h-20 w-20 bg-no-repeat bg-[url('/images/Vectorright.svg')]"></span>
                </div>
            </div>

        </div>
    </div>
}