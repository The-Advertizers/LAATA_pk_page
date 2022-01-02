import Head from "next/head";
import {basePath} from "../next.config";
import ParticlesBackground from "./ParticlesBackground";
import Footer from "./Footer";

export default function Layout({children}) {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden">
                <Head>
                    <title>London Aesthetics and Training Academy</title>
                    <link rel="icon" href={`${basePath}/favicon.png`}/>
                </Head>
                <ParticlesBackground/>
                {children}
            </div>
            <Footer/>
        </>
    );
}