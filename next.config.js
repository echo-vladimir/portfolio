/** @type {import('next').NextConfig} */
const path = require("path");

const isProduction = process.env.NODE_ENV === "production";

const repo = "web-portfolio";
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // FIXME:
    ignoreDuringBuilds: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  // i18n: {
  //   locales: ["en", "ru"],
  //   defaultLocale: "en",
  //   localeDetection: false,
  // },
  output: "export",
  images: { unoptimized: true },
  assetPrefix: assetPrefix,
  basePath: basePath,
  publicRuntimeConfig: {
    linkPrefix: isProduction ? basePath : "",
  },
};

module.exports = nextConfig;
