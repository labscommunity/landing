import Link from 'next/link'
import Image from 'next/image'

import Logo from '@/public/logo.svg'

type ButtonProps = {
  href?: string
  children: string
  className?: string
}

const baseClassName =
  'rounded-md border w-fit h-fit px-6 py-3 text-xl transition-all duration-[10ms]'

export function Primary({ href, className, children }: ButtonProps) {
  const El = href ? 'a' : 'button'
  const target = !href?.startsWith('/') ? '_blank' : undefined
  return (
    <El
      href={href}
      className={`${baseClassName} ${className} border-transparent bg-indigo-700 text-gray-50 shadow-black hover:-translate-y-[1px] hover:shadow-md active:translate-y-[1px] active:shadow`}
    >
      <a></a>
      {children}
    </El>
  )
}

export function Secondary({ href, className, children }: ButtonProps) {
  const El = href ? 'a' : 'button'
  const target = !href?.startsWith('/') ? '_blank' : undefined

  return (
    <El
      href={href}
      className={`${baseClassName} ${className} border-gray-800 text-gray-900 shadow-black hover:-translate-y-[1px] hover:shadow-md active:translate-y-[1px] active:shadow`}
    >
      {children}
    </El>
  )
}

export const Button = {
  Primary,
  Secondary,
}

export default Button
