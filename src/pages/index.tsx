import { Inter } from 'next/font/google'
import SubgenresList from '../components/SubgenresList'
import * as dotenv from 'dotenv' 

dotenv.config({ path: '.env'})

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <article className="flex flex-col items-center justify-start h-[810px] w-screen">
      <video autoPlay muted loop className='object-fill fixed z-[-1] opacity-40'>
        <source src="/background.mp4" type="video/mp4"/>
      </video>
      <h1 className="font-bold font-display text-white text-9xl p-12">Techno Guide</h1>
      <h2 className="font-black font-sans text-[#1569FF] text-6xl pb-10">What is techno?</h2>
      <p className='max-w-2xl text-2xl text-center pb-48'>Techno is a genre of electronic music that has a signature four-on-the-floor beat usually between 120 to 150 beats per minute (BPM). While there may be variations in the sub-genres that have emerged since the birth of Techno, the use of drum machines such as the Roland TR-808 or the TR-909 along with synthesizers and sequencers usually give it its distinct sound.</p>
      <SubgenresList />
      </article>
    </main>
  )
}
