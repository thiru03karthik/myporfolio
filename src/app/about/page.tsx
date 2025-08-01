import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Digital Marketing Expert | Karthikeyan',
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


export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt="Best Digital Marketing Consultant"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Karthik. I live in Coimbatore City.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
            a <span className="font-bold text-blue-500">Digital Marketing Expert</span> and 
            <span className="font-bold text-blue-500"> Full Stack Developer </span> 
            with a passion for merging technical expertise with 
            creative strategies to drive real results in the digital space.
            </p>
            <p>
            With over two years of experience at <span className="font-bold text-blue-500">RVS Transform Tech,</span> 
            I’ve specialized in a wide range of digital marketing and 
            development areas, including SEO, Search Engine Marketing (SEM), 
            Social Media Marketing (SMM), Email Marketing, Web Development,
             and WordPress Development.
            </p>
            <p>
            My educational background includes a <span className="font-bold text-blue-500">BSc in Information Technology </span>
            and an <span className="font-bold text-blue-500">MBA in Digital Marketing and Applied Finance</span> from RVS College of 
            Arts and Science in Sulur. This combination of education and practical 
            experience has given me a deep understanding of digital marketing principles, 
            financial insights, and technical development skills that I’m excited to share with others.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            {/* <SocialLink href="#" icon={XIcon}>
              Follow on X
            </SocialLink> */}
            <SocialLink href="https://www.instagram.com/thiru_karthi___/" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>

            <SocialLink href="https://github.com/thiru03karthik" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>

            <SocialLink href="https://www.linkedin.com/in/karthikeyan-a-digitalmarketing/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:karthikdmexpert@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              KarthikDMexpert@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
