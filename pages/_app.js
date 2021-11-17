import 'tailwindcss/tailwind.css'
import '../style.css';

import anim from "../animasection";
import {useEffect} from "react";

export default function MyApp({Component, pageProps}) {

    useEffect(() => {
        anim.init();
        anim.observeAll();
    }, []);

    return <Component {...pageProps} />
}
