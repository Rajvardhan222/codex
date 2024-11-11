export default function Button({
    content,
    style
                               }:{
    content: string,
    style: "Primary" | "Secondary"
}) {
    return(
        <button
        className={`
        py-2 px-6 
        font-semibold
        text-xl
        rounded-2xl
        border-2
        border-[#2B95ED]
        ${ style == "Primary" ? "text-[#2B95ED] border-[#2B95ED] bg-white" : " text-white bg-[#2B95ED]" }
        `}
        >
            {content}
        </button>
            )
}