import Head from 'next/head'
import Image from 'next/image'
import Category from '../components/Category/Category'
import HeroSection from '../components/HeroSection/HeroSection'
import Navbar from '../components/Navbar/Navbar'
import NFTs from '../components/NFT/NFTs'
import Steps from '../components/Steps/Steps'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
   <div>
      <HeroSection />
      <NFTs />
      <Steps />
      <Category />
   </div>
  )
}
