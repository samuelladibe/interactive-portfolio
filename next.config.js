/** @type {import('next').NextConfig} */
module.exports = {
  // A self-contained server in .next/standalone, used by the Dockerfile for Cloud Run.
  output: 'standalone',
  poweredByHeader: false,
  // Dev only: Next.js blocks its scripts for any other address, which leaves the page inert.
  allowedDevOrigins: ['127.0.0.1', '192.168.*.*', 'local-origin.dev', '*.local-origin.dev', 'goateed-shasta-vectorial.ngrok-free.dev'],
};
