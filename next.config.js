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
            }
        ];
    },
    images: {
        domains: ["drive.google.com"]
    }
};

module.exports = nextConfig;
