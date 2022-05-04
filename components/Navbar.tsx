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
      className={`flex w-full items-center justify-between py-4 px-16 ${className}`}
    >
      <Link href="/">
        <a className="flex items-center gap-4">
          <Image src={Logo} alt="Community Labs" height={32} width={32} />
          <span className='text-2xl font-semibold'>Community Labs</span>
        </a>
      </Link>
      <div className="flex gap-1 rounded-lg border border-neutral-900 bg-neutral-900">
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
