import Head from 'next/head'
import Image from 'next/image'
import HeroSection from '../components/HeroSection/HeroSection'
import Navbar from '../components/Navbar/Navbar'
import NFTs from '../components/NFT/NFTs'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
   <div>
      <Navbar />
      <HeroSection />
      <NFTs />
   </div>
  )
}
