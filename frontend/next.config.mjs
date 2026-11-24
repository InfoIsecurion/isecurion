
/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3001",
        pathname: "/api/media/file/**",
      },
    ],
  },

  reactCompiler: true,

  allowedDevOrigins: [
    "*.trycloudflare.com", "175.175.0.165"
  ],

  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
