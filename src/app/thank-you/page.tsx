import { Metadata } from 'next'
import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

export const metadata: Metadata = {
  title: 'Best Digital Marketing Consultant in Coimbatore | Karthikeyan',
  description: 'Hi, I’m Karthikeyan – a Digital Marketing Expert and Full Stack Developer committed to creating impactful digital strategies.',
  keywords: ['Digital Marketing', 'SEO', 'Web Development', 'Karthikeyan', 'Full Stack Developer'],
  openGraph: {
    title: 'Digital Marketing Expert | Karthikeyan',
    description: 'Hi, I’m Karthikeyan – a Digital Marketing Expert and Full Stack Developer committed to creating impactful digital strategies.',
    url: 'https://yourwebsite.com',
    siteName: 'Karthikeyan Digital Marketing',
    images: [
      {
        url: '/path/to/your/image.jpg',
        width: 800,
        height: 600,
        alt: 'Karthikeyan - Digital Marketing Expert',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

import { SimpleLayout } from '@/components/SimpleLayout'

// export const metadata: Metadata = {
//   title: 'You’re subscribed',
//   description: 'Thanks for subscribing to my newsletter.',
// }

export default function ThankYou() {
  return (
    <SimpleLayout
      title="Thanks for subscribing."
      intro="I’ll send you an email any time I publish a new blog post, release a new project, or have anything interesting to share that I think you’d want to hear about. You can unsubscribe at any time, no hard feelings."
    />
  )
}
