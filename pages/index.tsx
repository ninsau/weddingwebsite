import type { NextPage } from 'next'
import { Hero } from '../components/Hero.jsx'
import MetaComponent from '../components/Meta'

const Home: NextPage = () => {
  return (
    <>
    <MetaComponent/>
    <Hero/>
    </>
  )
}

export default Home
