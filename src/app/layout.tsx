import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import Script from 'next/script'

import '@/styles/tailwind.css'

// export const metadata: Metadata = {
//   title: {
//     template: '%s - Spencer Sharp',
//     default:
//       'Spencer Sharp - Software designer, founder, and amateur astronaut',
//   },
//   description:
//     'I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.',
//   alternates: {
//     types: {
//       'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
//     },
//   },
// }


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="CW_w-xwJSaTjhjkagMfQRfI-dntye-s95AEztvwZ51s" />
        {/* Google Analytics Script */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-4Z5LKHW52J"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4Z5LKHW52J', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
