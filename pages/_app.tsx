import AOS from "aos";
import React from "react";
import "../styles/globals.css";
import Script from "next/script";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    React.useEffect(() => {
        AOS.init({ duration: 1500 });
        AOS.refresh();
    }, []);

    return (
        <>
            <Component {...pageProps} />

            <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-BKQRGP4ZEC" />
            <Script strategy="lazyOnload" src="/assets/analytics.js" />
        </>
    );
}
