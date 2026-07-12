import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { siteConfig } from '@/lib/data';
import { Providers } from '@/components/Providers';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

// SEO metadata is static-exported once at build time (this is a client-side
// language switcher, not per-locale routes), so it intentionally stays in
// English regardless of the visitor's selected UI language.
const role = 'Computer Science Engineer';
const description =
  'Daniel Nguyen — Computer Science Engineer specializing in cybersecurity, networking, cloud and backend development. Building secure infrastructures and reliable applications.';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${role}`,
    template: `%s · ${siteConfig.name}`,
  },
  description,
  keywords: [
    'Daniel Nguyen',
    'Computer Science Engineer',
    'Cybersecurity',
    'Network Engineer',
    'Backend Developer',
    'Cloud',
    'DevOps',
    'Proxmox',
    'Kubernetes',
    'Spring Boot',
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: `${siteConfig.name} — ${role}`,
    description,
    siteName: `${siteConfig.name} · Portfolio`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — ${role}`,
    description,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#0B1120',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-base font-sans">
        {/* Skip link for keyboard users. */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-slate-950"
        >
          Skip to content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
