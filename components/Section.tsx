interface SectionProps {
  children: React.ReactNode
  className?: string
}
export default function Container({ children, className }: SectionProps) {
  return (
    <section className={`w-full p-12 px-20 ${className}`}>{children}</section>
  )
}
