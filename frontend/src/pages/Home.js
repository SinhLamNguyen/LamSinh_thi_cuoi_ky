import React from 'react'
import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { Footer } from '../components/Footer'
import { Banner2 } from '../components/Banner2'


export const Home = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
        <Header/>
        <Banner/>
        <Banner2/>
        <Footer/>
    </div>
  )
}
