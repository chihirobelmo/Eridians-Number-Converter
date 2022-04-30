/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  async headers() {
    return [
      {
        key: 'Content-Security-Policy',
        value: 'frame-src; https://www.amazon.com'
      },
    ]
  },
};


module.exports = nextConfig
