import Head from "next/head";
import ParticlesBackground from "../components/ParticlesBackground";
import {basePath} from "../next.config";
import {useEffect} from "react";
import * as fbq from "../lib/fpixel";

export default function ThankYou() {
    useEffect(fbq.pageview, []);

    return (
        <>
            <Head>
                <title>Thank You!</title>
                <link rel="icon" href={`${basePath}/favicon.png`}/>
            </Head>
            <div className="w-device">
                <div className="flex min-h-3/4-device items-center justify-center">
                    <div className="bg-accent-lighter py-8 px-16 shadow-lg rounded-md">
                        <h4 className="font-semibold text-center text-secondary text-xl md:text-2xl">Your response has
                            been submitted</h4>
                        <p className={'text-sm text-center text-secondary opacity-80 mt-4'}>Our team member will
                            approach you soon!</p>
                    </div>
                </div>
                <ParticlesBackground/>
            </div>
        </>
    );
}
