import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Autolead | AI-drevet salgassistent for bilforhandlere',
  description: 'Autolead er din digitale selger som svarer, kvalifiserer og booker møter døgnet rundt. Umiddelbar oppfølging med 60 sekunders responstid, skreddersydd for norske bilforhandlere.',
  keywords: ['Autolead', 'AI', 'bilforhandler', 'salgassistent', 'leadgenerering', 'bilsalg', 'Norge', 'chatbot', 'automatisering'],
  authors: [{ name: 'Autolead' }],
  creator: 'Autolead',
  publisher: 'Autolead',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'nb_NO',
    siteName: 'Autolead',
    title: 'Autolead | AI-drevet salgassistent for bilforhandlere',
    description: 'Din digitale selger som svarer, kvalifiserer og booker møter døgnet rundt. 100% oppfølging, 24/7 tilgjengelig, 60 sekunders responstid.',
    images: [
      {
        url: '/autolead-waitlist-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Autolead - Fremtiden for AI i bilbransjen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Autolead | AI-drevet salgassistent for bilforhandlere',
    description: 'Din digitale selger som svarer, kvalifiserer og booker møter døgnet rundt. Skreddersydd for norske bilforhandlere.',
    images: ['/autolead-waitlist-hero.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="no">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Autolead',
              applicationCategory: 'BusinessApplication',
              description: 'AI-drevet salgassistent for norske bilforhandlere. Automatisk leadoppfølging og møtebooking døgnet rundt.',
              operatingSystem: 'Web',
              offers: {
                '@type': 'Offer',
                availability: 'https://schema.org/PreOrder',
                priceCurrency: 'NOK',
              },
              provider: {
                '@type': 'Organization',
                name: 'Autolead',
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
