import Link from 'next/link'

interface NavbarProps {
  links: {
    name: string
    url: string
  }[]
  className?: string
}

export default function Navbar({ links, className }: NavbarProps) {
  return (
    <nav className={`navbar ${className}`}>
      <ul className="">
        {links.map(({ name, url }) => (
          <li className="" key={url}>
            <Link href={url}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
