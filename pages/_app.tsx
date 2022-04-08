import React from "react";
import Head from "next/head";
import "../styles/globals.css";
import Script from "next/script";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />

                {/* Primary Meta Tags */}
                <title>GenZTechies HackFest 2022</title>
                <meta name="title" content="GenZTechies HackFest 2022" />
                <meta name="description" content="Africa's largest GenZ Hackathon and Tech Festival 2022" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://hackfest2022.genztechies.com/" />
                <meta property="og:title" content="GenZTechies HackFest 2022" />
                <meta property="og:description" content="Africa's largest GenZ Hackathon and Tech Festival 2022" />
                <meta property="og:image" content="https://hackfest2022.genztechies.com/assets/site-preview.png" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://hackfest2022.genztechies.com/" />
                <meta property="twitter:title" content="GenZTechies HackFest 2022" />
                <meta property="twitter:description" content="Africa's largest GenZ Hackathon and Tech Festival 2022" />
                <meta property="twitter:image" content="https://hackfest2022.genztechies.com/assets/site-preview.png" />
            </Head>

            <Component {...pageProps} />

            <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-BKQRGP4ZEC" />
            <Script strategy="lazyOnload" src="/assets/js/analytics.js" />
        </>
    );
}

export default MyApp;
