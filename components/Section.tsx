interface SectionProps {
  children: React.ReactNode
  className?: string
}
export default function Container({ children, className }: SectionProps) {
  return <section className={'' + className}>{children}</section>
}
