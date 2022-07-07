import AOS from "aos";
import React from "react";
import Head from "next/head";
import "../styles/globals.css";
import Script from "next/script";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
    React.useEffect(() => {
        AOS.init({ duration: 1500 });
        AOS.refresh();
    }, []);

    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />

                {/* Primary Meta Tags */}
                <title>Gen Z Hackfest 2022</title>
                <meta name="title" content="Gen Z Hackfest 2022" />
                <meta name="description" content="Gen Z Hackfest is an annual hybrid event, 3-days hackathon and 1-day conference aimed at connecting Gen Z’s in tech on a large scale." />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://hackfest2022.genztechies.com/" />
                <meta property="og:title" content="Gen Z Hackfest 2022" />
                <meta property="og:description" content="Gen Z Hackfest is an annual hybrid event, 3-days hackathon and 1-day conference aimed at connecting Gen Z’s in tech on a large scale." />
                <meta property="og:image" content="https://hackfest2022.genztechies.com/assets/site-preview.png?update=1" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://hackfest2022.genztechies.com/" />
                <meta property="twitter:title" content="Gen Z Hackfest 2022" />
                <meta property="twitter:description" content="Gen Z Hackfest is an annual hybrid event, 3-days hackathon and 1-day conference aimed at connecting Gen Z’s in tech on a large scale." />
                <meta property="twitter:image" content="https://hackfest2022.genztechies.com/assets/site-preview.png?update=1" />
            </Head>

            <Component {...pageProps} />

            <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-BKQRGP4ZEC" />
            <Script strategy="lazyOnload" src="/assets/js/analytics.js" />
        </>
    );
}

export default MyApp;
