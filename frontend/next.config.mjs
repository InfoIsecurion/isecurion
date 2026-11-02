/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  allowedDevOrigins: [
    '192.168.56.1',
    '192.168.1.153',
    '175.175.0.174',
    '175.175.0.170', '172.31.208.1'
  ],
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;