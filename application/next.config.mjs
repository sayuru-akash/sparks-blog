/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization with modern remotePatterns
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sparks-by-codezela.ghost.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'static.ghost.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.gravatar.com',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '3000',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Optimize CSS
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Experimental features for Next.js 16
  experimental: {
    // Enable optimized package imports
    optimizePackageImports: ['@fortawesome/react-fontawesome', '@fortawesome/free-solid-svg-icons'],
  },

  // Logging configuration
  logging: {
    fetches: {
      fullUrl: true,
    },
  },

  // Power optimization for production
  poweredByHeader: false,

  // Compression
  compress: true,

  // Generate ETags
  generateEtags: true,

  // Output handling
  output: 'standalone',
};

export default nextConfig;
