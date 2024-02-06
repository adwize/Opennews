/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "asriran.com",
                protocol: "https",
            },
        ],
    },

};

export default nextConfig;