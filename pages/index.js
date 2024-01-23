import Layout from "@/component/Layout";
import {useSession} from "next-auth/react";

export default function Home() {
    const {data: session} = useSession();
return <Layout>
    <div className="text-gray-800 flex">
        <h2>
            Hello, {session?.user?.name}
        </h2>
        <div>
            <img src={session?.user?.image} alt=""/>
        </div>
    </div>
</Layout>
}