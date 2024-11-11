import Image from "next/image";

interface SpecializationCardProps {
    number: number;
    title: string;
    imagePath: string;
    description: string;
}

const SpecializationCard: React.FC<SpecializationCardProps> = ({
                                                                   number,
                                                                   title,
                                                                   imagePath,
                                                                   description,
                                                               }) => {
    return (
        <div className="relative p-6 bg-white shadow-xl rounded-lg w-full max-w-md text-center">
            {/* Circle with Number */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 bg-[#1DDDDF] text-white font-bold text-lg rounded-full">
                {number}
            </div>

            {/* Icon and Title */}
            <div className="flex gap-x-7  items-center mt-8">
                <Image src={imagePath} alt="icon" width={78} height={47} />
                <h2 className="mt-4 font-semibold text-xl text-gray-800">{title}</h2>
            </div>

            {/* Description */}
            <p className="mt-4 text-gray-600">{description}</p>

            {/* Gradient Border and Arrow Effect */}
            <div className={"absolute -right-3 -bottom-3  w-full h-full rounded-lg " +
                " before:content-[''] before:absolute before:bottom-0" +
                " before:right-2 before:-top-4 before:border before:border-transparent before:-z-10" +
                " before:w-full before:h-full before:p-7 before:rounded-lg before:border-r-4 before:border-t-4" +
                " before:border-t-transparent before:border-r-transparent before:bg-gradient-to-l " +
                "from-[#1DDDDF] via-[#1C408E] to-[#2B95ED] before:rounded-br-lg"}>

            </div>
                </div>
    );
};

export default SpecializationCard;
