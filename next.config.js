/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // {
      //   source: '/',
      //   destination: '/contact-us',
      //   permanent: true,
      // },
      // {
      //   source: '/about-us',
      //   destination: '/contact-us',
      //   permanent: true,
      // },
      // {
      //   source: '/blogs',
      //   destination: '/contact-us',
      //   permanent: true,
      // },
    ];
  },
};

module.exports = nextConfig;
