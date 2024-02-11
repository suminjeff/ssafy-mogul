/** @type {import('next').NextConfig} */
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   domains: ["www.kmas.or.kr"],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: `/api/user/signup`,
  //       destination: `/api/user/login`,
  //     },
  //   ];
  // }
};

export default nextConfig;
