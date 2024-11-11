export default function NavLink({name}:{name:string}) {
    return (
        <div className={"h-24 flex items-center"}>
            <p className={"font-normal lg:text-sm text-lg text-[#3B3A3A]"}>{name}</p>
        </div>
    )
}