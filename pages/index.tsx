import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Project from '@/components/Project'
import Section from '@/components/Section'
import Button from '@/components/Button'
import Footer from '@/components/Footer'

import IMGverto from '@/public/img/projects/verto.png'
import IMG3em from '@/public/img/projects/3em.png'

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
        <Project
          title="Verto"
          subtitle="Decentralized Exchange"
          description="Verto is a ipsum dolor sit amet, consectetur adipiscing elit. Sagittis, amet purus, enim nam turpis enim vulputate at. Tellus dolor, amet, urna nunc at. Lobortis pharetra habitant non ac imperdiet sed."
          link="https://verto.exchange"
          image={IMGverto}
        />
        <Project
          title="3EM"
          subtitle="Smart Contracts | Infrastructure"
          gradient="bg-gradient-to-r from-cyan-500 to-blue-500"
          description="3EM is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis, amet purus, enim nam turpis enim vulputate at. Tellus dolor, amet, urna nunc at. Lobortis pharetra habitant non ac imperdiet sed."
          link="https://3em.dev"
          image={IMG3em}
          reverse
        />
        <Project
          title="ArConnect"
          subtitle="Wallet | Identity"
          description="ArConnect is a ipsum dolor sit amet, consectetur adipiscing elit. Sagittis, amet purus, enim nam turpis enim vulputate at. Tellus dolor, amet, urna nunc at. Lobortis pharetra habitant non ac imperdiet sed."
          link="https://arconnect.io"
          image={IMGverto}
        />

        <Section>
          <div className="my-6 mx-auto max-w-screen-md rounded-2xl bg-neutral-900 p-12 text-lg">
            <h1 className="mb-8 text-center text-6xl font-bold">Our Why</h1>
            <p className="mb-6 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis,
              amet purus, enim nam turpis enim vulputate at. Tellus dolor, amet,
              urna nunc at. Lobortis pharetra habitant non ac imperdiet sed.
            </p>
            <p className="mb-6 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis,
              amet purus, enim nam turpis enim vulputate at. Tellus dolor, amet,
              urna nunc at. Lobortis pharetra habitant non ac imperdiet sed.
            </p>
            <Button.Primary className="self-center">
              Read our statement of purpose
            </Button.Primary>
          </div>
        </Section>
        <Section>
          <div className="my-6 mx-auto max-w-screen-md rounded-2xl border-2 border-dashed border-rose-700 bg-neutral-900 p-12 text-lg">
            <h1 className="text-center text-6xl font-bold">[Our Team]</h1>
          </div>
        </Section>
        <Section>
          <div className="my-6 mx-auto max-w-screen-md rounded-2xl bg-neutral-900 p-12 text-lg">
            <h1 className="mb-8 text-center text-6xl font-bold">
              Come Join Us
            </h1>
            <p className="mb-6 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis,
              amet purus, enim nam turpis enim vulputate at. Tellus dolor, amet,
              urna nunc at. Lobortis pharetra habitant non ac imperdiet sed.
            </p>
            <p className="mb-6 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis,
              amet purus, enim nam turpis enim vulputate at. Tellus dolor, amet,
              urna nunc at. Lobortis pharetra habitant non ac imperdiet sed.
            </p>
            <Button.Primary className="self-center">Learn More</Button.Primary>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  )
}

export default Home
