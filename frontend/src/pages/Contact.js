import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export const Contact = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
        <Header/>
        <h1>Contact us!</h1>
        <Footer/>
    </div>
  )
}
