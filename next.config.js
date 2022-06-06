/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "pl", "ru", "ua"],
    defaultLocale: "en",
    localeDetection: true,
  }
}

module.exports = nextConfig