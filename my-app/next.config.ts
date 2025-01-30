import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    API_URL: process.env["services__api__http__0"] ||  process.env["services__api__https__0"],
  },
};

export default nextConfig;
