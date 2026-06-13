import type { Metadata } from 'next'

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://trukkas.com'

export const siteName = 'Trukkas'

export const routes = [
  {
    path: '/',
    title: 'Trukkas | Container Trucking, Escrow, and Live Freight Tracking',
    description:
      'Book verified truckers, protect freight payments with escrow, and track container deliveries from pickup to completion across Nigeria.',
  },
  {
    path: '/how-it-works',
    title: 'How Trukkas Works | Verified Freight Execution',
    description:
      'See how Trukkas handles freight requests, document review, verified trucker offers, escrow payments, live tracking, and delivery confirmation.',
  },
  {
    path: '/for-truckers',
    title: 'For Truckers | Get Paid Upfront and Complete Jobs with Trukkas',
    description:
      'Register your truck or fleet, review job details before accepting, receive 30% upfront, and get automatic settlement after completed deliveries.',
  },
  {
    path: '/safety-and-trust',
    title: 'Safety and Trust | Verified Truckers and Escrowed Freight Payments',
    description:
      'Trukkas protects freight jobs with verified drivers, reviewed documents, escrowed payments, live GPS visibility, and logged delivery milestones.',
  },
  {
    path: '/contact',
    title: 'Contact Trukkas | Start Moving Freight Smarter',
    description:
      'Contact Trukkas to post freight jobs, register your truck or fleet, ask about verification, or get support from the logistics team.',
  },
]

type PageMetadataInput = {
  path: string
  title: string
  description: string
}

export function pageMetadata({
  path,
  title,
  description,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName,
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
      title,
      description,
      images: ['/android-chrome-512x512.png'],
    },
  }
}

export function routeMetadata(path: string) {
  const route = routes.find((item) => item.path === path)

  if (!route) {
    throw new Error(`Missing SEO metadata for route: ${path}`)
  }

  return pageMetadata(route)
}

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString()
}
