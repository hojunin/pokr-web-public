const { withSentryConfig } = require('@sentry/nextjs');

const withImages = require('next-images');
const path = require('path');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.NODE_ENV === 'production',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: [],
  },
  images: {
    domains: [],
    disableStaticImages: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = withBundleAnalyzer(withImages(nextConfig));

module.exports = withSentryConfig(
  module.exports,
  { silent: true },
  { hideSourcemaps: process.env.NODE_ENV === 'production' },
);
