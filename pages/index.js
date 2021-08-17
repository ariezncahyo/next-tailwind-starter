import Head from 'next/head'
import Image from 'next/image'
import ReactTyped from 'react-typed'
import clsx from 'clsx'
import NavBar from '../components/NavBar'

const typed = [
  "Hello World",
  "Nextjs",
  "Tailwind CSS",
  "PWA"
]

export default function Index() {
  return (
    <>
      <NavBar/>
      <div className={clsx("text-center")}>
        <div style={{
          paddingTop: "250 !important"
        }}>
          <p className="text-5xl text-blue-800">Next Tailwind Starter</p>
          <div className="text-2xl text-pink-500">
            <ReactTyped strings={typed} typeSpeed={40} backSpeed={60} loop/>
          </div>
        </div>
      </div>
    </>
  )
}
