interface SectionProps {
  children: React.ReactNode
  className?: string
}
export default function Container({ children, className }: SectionProps) {
  return (
    <section className={`max-w-full p-12 ${className}`}>{children}</section>
  )
}
