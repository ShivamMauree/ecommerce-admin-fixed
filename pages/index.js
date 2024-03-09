import Layout from "@/components/Layout";
import {useSession} from "next-auth/react";

export default function Home() {
    const {data: session} = useSession();
    console.log({session});
return <Layout>
    <div className="text-secondary flex justify-between">
        <h2>
            Hello, {session?.user?.name}
        </h2>
        <div className = "flex bg-bgGray  gap- 1 text-primary rounded-lg overflow-hidden">
            <img src={session?.user?.image} alt="" className = "w-8 h-8 rounded-lg"/>
            <span className = "py-1 px-2">
                            {session?.user?.name}
            </span>
        </div>
    </div>
</Layout>
}