/**
 * Next.js configuration — static export for GitHub Pages.
 *
 * Hosting target: Tarkhog06.github.io (user site, served at the domain root),
 * so basePath is empty. If you ever move this to a project repo served at
 * `username.github.io/<repo>`, set NEXT_PUBLIC_BASE_PATH="/<repo>" (the deploy
 * workflow reads the same env var) so assets resolve correctly.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  // GitHub Pages has no image optimization server, so serve images as-is.
  images: { unoptimized: true },
  // Emit `/route/index.html` folders — GitHub Pages resolves these cleanly.
  trailingSlash: true,
};

export default nextConfig;
