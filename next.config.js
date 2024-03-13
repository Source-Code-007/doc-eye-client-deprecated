/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['*'], // Allow loading images from all domains
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
      ],
    },
  };
  
  

module.exports = nextConfig
