import  { useSession, signIn, signOut } from "next-auth/react"
import Nav from "@/components/Nav";
import {useState} from "react";
import Logo from "@/components/Logo";
export default function Layout({children}) {
    const [showNav, setShowNav]= useState(false);
    const { data: session } = useSession();
    const inactiveIcon = 'w-6 h-6 text-gray-500';
    const activeIcon = inactiveIcon + ' text-secondary';
    if (!session){
        return (
            <div className = "bg-bgGray w-screen h-screen flex items-center ">
                <div className= "text-center w-full" >
                    <button onClick={()=>signIn('google')} className="bg-highlight p-2 px-4 rounded-lg"> Login With Google</button>
                </div>
            </div>
        );
    }
    return (
        <div className="bg-bgGray min-h-screen px-3 ">
            <div className="block md:hidden flex p-4 ">
                <button onClick={() => setShowNav(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="btn-link">
                        <path
                            d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"/>
                    </svg>
                </button>
                <div className="flex grow justify-center ">
                    <Logo></Logo>
                </div>
            </div>
            <div className="flex ">
                <Nav show={showNav}/>
                <div className={"bg-highlight flex-grow mt-2 mr-2 rounded-lg p-4"}>
                    {children}
                </div>
            </div>
        </div>

    );
}