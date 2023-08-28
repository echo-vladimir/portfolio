/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
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
};

module.exports = nextConfig;
