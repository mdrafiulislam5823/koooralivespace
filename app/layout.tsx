import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Noto_Sans_Arabic } from "next/font/google"
import "./globals.css"

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-arabic",
})

export const metadata: Metadata = {
  title: "كورة لايف - مشاهدة المباريات مباشرة",
  description: "شاهد مباريات كرة القدم مباشرة مع كورة لايف - البث المباشر للدوري السعودي والدوريات العالمية",
  generator: "Next.js",
  keywords: "كورة لايف, مباريات مباشرة, الدوري السعودي, كرة القدم, بث مباشر",
  metadataBase: new URL('https://koooralive.space'),
  alternates: {
    canonical: '/',
    languages: {
      'ar-SA': '/',
      'ar': '/',
    },
  },
  openGraph: {
    title: "كورة لايف - مشاهدة المباريات مباشرة",
    description: "شاهد مباريات كرة القدم مباشرة مع كورة لايف",
    locale: "ar_SA",
    type: 'website',
    siteName: 'كورة لايف',
    url: 'https://koooralive.space',
  },
  twitter: {
    card: 'summary_large_image',
    title: "كورة لايف - مشاهدة المباريات مباشرة",
    description: "شاهد مباريات كرة القدم مباشرة مع كورة لايف",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="canonical" href="https://koooralive.space" />
        <link rel="alternate" hrefLang="ar" href="https://koooralive.space" />
        <link rel="alternate" hrefLang="ar-SA" href="https://koooralive.space" />
        <link rel="alternate" hrefLang="x-default" href="https://koooralive.space" />
        <meta name="theme-color" content="#16a34a" />
        <meta name="msapplication-TileColor" content="#16a34a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${notoSansArabic.variable}`}>
        {children}
      </body>
    </html>
  )
}
