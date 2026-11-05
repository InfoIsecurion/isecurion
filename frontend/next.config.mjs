/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  allowedDevOrigins: ['175.175.0.176', "192.168.1.153"],
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;