import Link from 'next/link'
import Image from 'next/image'

import Logo from '@/public/logo.svg'

interface NavbarProps {
  links: {
    name: string
    url: string
    primary?: boolean
  }[]
  className?: string
}

export default function Navbar({ links, className }: NavbarProps) {
  return (
    <nav
      className={`sticky top-0 z-50 mb-8 flex w-full items-center justify-between bg-opacity-50 py-2 px-16 backdrop-blur ${className}`}
    >
      <Link href="/">
        <a className="flex items-center gap-4">
          <Image src={Logo} alt="Community Labs" height={32} width={32} />
          <span className="text-2xl font-semibold">Community Labs</span>
        </a>
      </Link>
      <div className="flex gap-1 rounded-lg border-opacity-70 bg-neutral-900 bg-opacity-80 p-1">
        {links.map(({ name, url, primary }) => (
          <Link href={url} key={url}>
            <a
              className={
                `rounded-lg px-6 py-2 font-medium ` +
                (primary
                  ? `bg-indigo-700 hover:bg-indigo-600`
                  : `hover:bg-neutral-800`)
              }
            >
              {name}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  )
}
