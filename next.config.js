const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  cacheOnFrontEndNav: false,
  aggressiveFrontEndNavCaching: false,
  reloadOnOnline: true,
  disable: process.env.NODE_ENV === "development",
  workboxOptions: {
    skipWaiting: true,
    clientsClaim: true,
    cleanupOutdatedCaches: true,
    disableDevLogs: true,
    runtimeCaching: [
      {
        // HTML de navegación — siempre desde la red para que los usuarios
        // vean siempre la versión más reciente
        urlPattern: ({ request }) => request.mode === "navigate",
        handler: "NetworkFirst",
        options: {
          cacheName: "html-cache",
          networkTimeoutSeconds: 5,
        },
      },
    ],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: { NEXT_TELEMETRY_DISABLED: "1" },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "media.sketchfab.com" },
      { protocol: "https", hostname: "static.sketchfab.com" },
    ],
  },
  async headers() {
    return [
      // Version file: nunca cachear
      {
        source: "/version.json",
        headers: [
          { key: "Cache-Control", value: "no-cache, no-store, must-revalidate" },
          { key: "Pragma", value: "no-cache" },
        ],
      },
      // Manifest: nunca cachear
      {
        source: "/manifest.json",
        headers: [
          { key: "Cache-Control", value: "no-cache, no-store, must-revalidate" },
          { key: "Pragma", value: "no-cache" },
        ],
      },
      // Service worker: nunca cachear para que el browser detecte actualizaciones
      {
        source: "/sw.js",
        headers: [
          { key: "Cache-Control", value: "no-cache, no-store, must-revalidate" },
          { key: "Pragma", value: "no-cache" },
        ],
      },
      {
        source: "/workbox-:hash.js",
        headers: [
          { key: "Cache-Control", value: "no-cache, no-store, must-revalidate" },
          { key: "Pragma", value: "no-cache" },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://sketchfab.com https://static.sketchfab.com",
              "style-src 'self' 'unsafe-inline'",
              "frame-src https://sketchfab.com https://*.sketchfab.com",
              "img-src 'self' data: blob: https://media.sketchfab.com https://static.sketchfab.com",
              "connect-src 'self' https://sketchfab.com https://api.sketchfab.com https://media.sketchfab.com wss://*.sketchfab.com",
              "font-src 'self' data:",
              "worker-src 'self' blob:",
            ].join("; "),
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
        ],
      },
    ];
  },
};

module.exports = withPWA(nextConfig);
