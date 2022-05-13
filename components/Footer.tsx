import Link from 'next/link'
import Image from 'next/image'

import Logo from '@/public/logo.svg'

const links = [
  {
    name: 'Smart Contracts',
    url: '/',
  },
  {
    name: 'Smart Contracts',
    url: '/',
  },
  {
    name: 'Smart Contracts',
    url: '/',
  },
]

export default function Footer() {
  return (
    <footer
      className={`flex w-full justify-between border-t border-neutral-900 py-6 px-12`}
    >
      <Link href="/">
        <a className="flex items-center gap-4">
          <Image src={Logo} alt="Community Labs" height={32} width={32} />
          <span className="text-2xl font-semibold">Community Labs</span>
        </a>
      </Link>
      <div className="flex gap-1">
        {links.map(({ name, url }) => (
          <Link href={url} key={url}>
            <a className="px-6 py-2 font-medium text-neutral-300 hover:text-neutral-100 hover:underline">
              {name}
            </a>
          </Link>
        ))}
      </div>
    </footer>
  )
}
