import 'tailwindcss/tailwind.css'
import '../style.css';

import anim from "../animasection";
import {useEffect} from "react";
import FacebookPixel from "../components/FacebookPixel";

export default function MyApp({Component, pageProps}) {

    useEffect(() => {
        anim.init();
        anim.observeAll();
    }, []);

    return (
        <FacebookPixel>
            <Component {...pageProps} />
        </FacebookPixel>
    );
}
