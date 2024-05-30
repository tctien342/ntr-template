require("next-ws/server").verifyPatch();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
  typescript: {
    // TODO: Remove when SOCKET type is fixed
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
