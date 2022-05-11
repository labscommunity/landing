import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col justify-center bg-black text-white">
      <Head>
        <title>Community Labs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar
        links={[
          { name: 'Home', url: '/' },
          { name: 'About', url: '#about' },
          { name: 'Team', url: '#team' },
          { name: 'Join us!', url: '/join', primary: true },
        ]}
      />

      <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
        <Hero />
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home
