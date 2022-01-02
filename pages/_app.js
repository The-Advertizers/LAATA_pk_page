import 'tailwindcss/tailwind.css'
import '../style.css';

import anim from "../animasection";
import {useEffect} from "react";
import FacebookPixel from "../components/FacebookPixel";
import Layout from "../components/Layout";

export default function MyApp({Component, pageProps}) {

    useEffect(() => {
        anim.init();
        anim.observeAll();
    }, []);

    return (
        <FacebookPixel>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </FacebookPixel>
    );
}
