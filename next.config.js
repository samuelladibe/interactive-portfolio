/** @type {import('next').NextConfig} */
module.exports = {
  // A self-contained server in .next/standalone, used by the Dockerfile for Cloud Run.
  output: 'standalone',
  poweredByHeader: false,
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev', 'goateed-shasta-vectorial.ngrok-free.dev'],
};
