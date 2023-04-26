import React from "react";

const siteVersion = "2023";

export default function Home() {
    return null;
}

export async function getStaticProps() {
    return {
        redirect: {
            destination: `/${siteVersion}`
        }
    };
}
