import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export const About = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
        <Header/>
        <h1>About us</h1>
        <Footer/>
    </div>
  )
}
