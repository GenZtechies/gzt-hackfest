import Head from "next/head";
import { useRouter } from "next/router";

interface SeoProp {
    title: string;
    description?: string;
    image?: string;
}

export default function Seo({ title, description, image }: SeoProp) {
    const router = useRouter();

    const siteBaseUrl = "https://hackfest.genztechies.com";

    const SEO = {
        title: title,
        url: siteBaseUrl + router.pathname,
        image: siteBaseUrl + (image || "/assets/site-metaimage.png"),
        description: description || "Gen Z Hackfest is an annual hybrid event organised by the GenZtechies Community 🚀"
    };

    return (
        <Head>
            <title>{SEO.title}</title>

            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <link rel="icon" href="https://assets.genztechies.com/icon-coloured.png" />
            <meta name="keywords" content="GenZtechies, Gen Z Hackfest, Gen Z conference in Africa, Gen Z hackathon in Africa" />

            <meta name="title" content={SEO.title} />
            <meta name="description" content={SEO.description} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={SEO.url} />
            <meta property="og:title" content={SEO.title} />
            <meta property="og:image" content={SEO.image} />
            <meta property="og:description" content={SEO.description} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={SEO.url} />
            <meta property="twitter:title" content={SEO.title} />
            <meta property="twitter:image" content={SEO.image} />
            <meta property="twitter:description" content={SEO.description} />
        </Head>
    );
}
