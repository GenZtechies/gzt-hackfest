/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true,
    async redirects() {
        return [
            {
                source: "/",
                destination: "/2023",
                permanent: false
            },
            {
                source: "/2024",
                destination: "https://fusiontechfest.com",
                permanent: false,
                basePath: false
            },
        ];
    },
    images: {
        domains: ["drive.google.com"]
    }
};

module.exports = nextConfig;
