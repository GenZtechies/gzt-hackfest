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
    }
};

module.exports = nextConfig;
