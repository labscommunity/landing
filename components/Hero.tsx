import Section from '@/components/Section'
import Marquee from 'react-fast-marquee'

const buzzwords = [
  'Smart Contracts',
  'Decentralized Applications',
  'Identity',
  'Runtimes',
  'Blockchain',
  'Infrastructure',
  'Security',
  'Trustless',
  'Consensus',
  'Placeholder0',
  'Placeholder1',
  'Placeholder2',
  'Placeholder3',
  'Placeholder4',
  'Placeholder5',
  'Placeholder6',
  'Placeholder7',
  'Placeholder8',
  'Placeholder9',
].sort(() => Math.random() - 0.5) // shuffle sort

export default function Hero() {
  return (
    <Section className="flex px-28 flex-col gap-16">
      <h1 className="text-8xl font-bold">
        Building critical infrastructure for the Arweave ecosystem
      </h1>
      <div className="my-8 flex flex-col gap-8">
        <Marquee gradientColor={[0, 0, 0]}>
          {buzzwords.map((word) => (
            <span className="mx-4 rounded-full border px-4 py-2" key={word}>
              {word}
            </span>
          ))}
        </Marquee>
        <Marquee direction="right" gradientColor={[0, 0, 0]}>
          {buzzwords.map((word) => (
            <span className="mx-4 rounded-full border px-4 py-2" key={word}>
              {word}
            </span>
          ))}
        </Marquee>
      </div>
      <div className="w-full text-neutral-400">
        <p className="w-2/5 border-l-2 border-amber-500 pl-4 text-xl text-left">
          <span className="font-bold">We are building</span> dolor sit amet,
          consectetur adipiscing elit. Sagittis, amet purus, enim nam turpis
          enim vulputate at. Tellus dolor, amet, urna
        </p>
      </div>
    </Section>
  )
}
