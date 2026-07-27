import type { Metadata, Viewport } from 'next'
import '../index.css'
import RootLayout from '../layout/RootLayout'
import { absoluteUrl, siteName, siteUrl } from '../lib/seo'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: 'Trukkas | Container Trucking, Escrow, and Live Freight Tracking',
    template: `%s | ${siteName}`,
  },
  description:
    'Book verified truckers, protect freight payments with escrow, and track container deliveries from pickup to completion across Nigeria.',
  keywords: [
    'Trukkas',
    'container trucking Nigeria',
    'freight logistics Nigeria',
    'verified truckers',
    'freight escrow',
    'cargo tracking',
  ],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png' }],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Trukkas | Container Trucking, Escrow, and Live Freight Tracking',
    description:
      'Book verified truckers, protect freight payments with escrow, and track container deliveries from pickup to completion across Nigeria.',
    url: '/',
    siteName,
    locale: 'en_NG',
    type: 'website',
    images: [
      {
        url: '/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'Trukkas',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Trukkas | Container Trucking, Escrow, and Live Freight Tracking',
    description:
      'Book verified truckers, protect freight payments with escrow, and track container deliveries from pickup to completion across Nigeria.',
    images: ['/android-chrome-512x512.png'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000036',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': absoluteUrl('/#organization'),
      name: siteName,
      url: siteUrl,
      logo: absoluteUrl('/android-chrome-512x512.png'),
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'hello@trukkas.com',
        contactType: 'customer support',
        areaServed: 'NG',
        availableLanguage: 'English',
      },
    },
    {
      '@type': 'WebSite',
      '@id': absoluteUrl('/#website'),
      name: siteName,
      url: siteUrl,
      publisher: {
        '@id': absoluteUrl('/#organization'),
      },
    },
    {
      '@type': 'SoftwareApplication',
      name: siteName,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'iOS, Android',
      description:
        'A freight logistics marketplace for verified truckers, escrowed payments, document review, and live cargo tracking.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'NGN',
      },
    },
  ],
}

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
