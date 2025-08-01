// src/app/dm-tools/page.tsx
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

export const metadata: Metadata = {
  title: 'Digital Marketing Tools | Karthikeyan',
  description: 'Explore the tools I’ve built to enhance your digital marketing strategies. From schema generators to SEO optimizers, these tools are designed to help you succeed online.',
  keywords: ['Digital Marketing Tools', 'SEO Tools', 'Schema Generator', 'Karthikeyan', 'Marketing Tools'],
  openGraph: {
    title: 'Digital Marketing Tools | Karthikeyan',
    description: 'Explore the tools I’ve built to enhance your digital marketing strategies. From schema generators to SEO optimizers, these tools are designed to help you succeed online.',
    url: 'https://yourwebsite.com/dm-tools',
    siteName: 'Karthikeyan Digital Marketing',
    images: [
      {
        url: '/path/to/your/image.jpg',
        width: 800,
        height: 600,
        alt: 'Karthikeyan - Digital Marketing Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
// import logoSchema from '@/images/logos/schema.svg'
// import logoSeo from '@/images/logos/seo.svg'
// import logoAnalytics from '@/images/logos/analytics.svg'
// import logoContent from '@/images/logos/content.svg'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'

const tools = [
   {
    name: 'Site Audit',
    description:
      'Optimize your website with a variety of SEO tools, including robots.txt generator, sitemap generator, and more.',
    link: { href: '/dm-tools/site-audit', label: 'Go to Tool' },
    logo: logoCosmos,
  },
  {
    name: 'Schema Markup Generator',
    description:
      'Generate schema markup for your website to improve SEO and make your content stand out on search engines.',
    link: { href: '/dm-tools/schema-markup', label: 'Go to Tool' },
    logo: logoAnimaginary,
  },
  {
    name: 'Meta-Tag Optimiser',
    description:
      'Track your website’s performance with detailed analytics to optimize your digital marketing strategy.',
    link: { href: '/dm-tools/meta-tag-optimizer', label: 'Go to Tool' },
    logo: logoHelioStream,
  },
  {
    name: 'Content Optimization Tools',
    description:
      'Enhance your website’s content with keyword analysis, readability scoring, and meta tag optimization.',
    link: { href: '/dm-tools/content-optimization', label: 'Go to Tool' },
    logo: logoOpenShuttle,
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Tools() {
  return (
    <SimpleLayout
      title="Explore My Digital Marketing Tools"
      intro="These are the most useful tools I’ve created to assist with digital marketing, SEO optimization, content generation, and more. Dive into the tools that help businesses grow."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {tools.map((tool) => (
          <Card as="li" key={tool.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={tool.logo}
                alt={tool.name}
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={tool.link.href}>{tool.name}</Card.Link>
            </h2>
            <Card.Description>{tool.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{tool.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
