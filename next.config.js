// @ts-check
// const { i18n } = require('./next-i18next.config.js');

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  compiler: { styledComponents: { ssr: true } },  // ✅
  // i18n,
  trailingSlash: true,
};

module.exports = nextConfig;