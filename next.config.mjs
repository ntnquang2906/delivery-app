/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.rawpixel.com',
            },
            {
                protocol: 'https',
                hostname: 'static01.nyt.com',
            },
        ],
    },
};

export default nextConfig;
