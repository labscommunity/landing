import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import Section from '@/components/Section'
import Button from '@/components/Button'

import Logo from '@/public/logo.svg'

interface ProjectProps {
  title: string
  subtitle?: string
  description: string
  link?: string
  image: StaticImageData
  gradient?: string
  reverse?: boolean
  black?: boolean
  className?: string
}

export default function Project({
  title,
  subtitle,
  description,
  image,
  link,
  gradient = 'bg-gradient-to-r from-violet-500 to-fuchsia-500',
  reverse = false,
  black = false,
  className = '',
}: ProjectProps) {
  return (
    <Section
      className={`flex justify-between align-middle ${
        reverse ? 'flex-row-reverse' : 'flex-row bg-neutral-900'
      } ${className}`}
    >
      <div className="flex w-2/5 flex-col content-end justify-center text-left">
        <h1 className="mb-2 text-6xl font-bold">{title}</h1>
        {subtitle && (
          <h2 className="text-5xl font-bold opacity-50">{subtitle}</h2>
        )}
        <p className="mt-12 text-lg text-neutral-400">{description}</p>
        {link && (
          <Button.Primary href={link} className="mt-8">
            Learn More
          </Button.Primary>
        )}
      </div>
      <div className={`w-1/2 rounded-lg ${gradient} p-12`}>
        <Image src={image} />
      </div>
    </Section>
  )
}
