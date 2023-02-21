/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: [
      "1000logos.net",
      "wallpaperaccess.com",
      "links.papareact.com",
      "jsonkeeper.com",
    ],
  },
};

module.exports = nextConfig;
