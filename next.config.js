/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'pbxt.replicate.delivery',
      'g4yqcv8qdhf169fk.public.blob.vercel-storage.com',
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "replicate.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "public.blob.vercel-storage.com",
        port: "",
        pathname: "/**",
      }
    ],
    unoptimized: true,
  },
};

module.exports = nextConfig;
