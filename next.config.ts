import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        /* Placeholder do czasu dostarczenia zdjęcia Adriana */
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};

export default nextConfig;
