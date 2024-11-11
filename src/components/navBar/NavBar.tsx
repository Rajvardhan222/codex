

import Image from "next/image";
import NavLink from "@/components/navBar/NavLink";
import Button from "@/components/button/Button";
export default function Navbar() {
    return (
        <div className={"flex justify-around items-center mx-16 "}>
            <div className={"flex justify-around  flex-auto items-center"}>

           <Image src={"/images/logo-light-removebg-preview-3.svg"} alt={"logo"}
              width={300} height={95}   />
            <NavLink name={"About Us"}/>
            <NavLink name={"Virtual Labs"}/>
            <NavLink name={"Programs"}/>
            <NavLink name={"For Colleges"}/>
            </div>
            <div className={"flex justify-evenly gap-x-5"}>

            <Button content={"Log in"} style={"Primary"}/>
            <Button content={"Register"} style={"Secondary"}/>
            </div>
        </div>
    )
}