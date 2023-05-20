//import { useState } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Widgets from '../Widgets'
import Services from '../services/Services'

import './Home.css'
import cineticaBanner from '../assets/cinetica.png'
import instagramIcon from '../assets/instagram.svg'

import Logo3 from '../assets/logo3Circulos.svg'
import homeText from '../assets/homeText.svg'
import Background from '../componentes/Backround/Background'

const arrayMessage = [
  {
    message: 'Algumas oportunidades são únicas, então não perca tempo!'
  },
  {
    message: 'Nem todos os dias são bons, mas há algo bom em cada dia!'
  },
  {
    message: 'Acredite que você pode e você já está no meio do caminho!'
  },
  {
    message: 'Cada novo dia é uma nova oportunidade para fazer algo incrível!'
  },
  {
    message: 'O sucesso não é sorte, mas de persistência e otimismo!'
  },
  {
    message: 'Tudo vai dar certo no final, se ainda não, é porque ainda não chegou o final!'
  },
  {
    message: 'Não desista, as coisas boas levam tempo e esforço para acontecerem!'
  },
]

const numero = Math.floor(Math.random() * arrayMessage.length)

export default function Home(){

  return(
      <div className='home'>
          <Header className="header"/>
          <section>
              <Background/>
              <main>
                 <div className='homeImage'>
                  <div className='homeImageText'>
                    <img src={homeText} alt="" />
                  </div>
                  <div className='logo3'>
                    <img src={Logo3} alt="" />
                  </div>
                 </div>
                 <div className='homeMessage'>
                  <div className='homeMessaText'>
                    <p>
                      {arrayMessage[numero].message}
                    </p>
                  </div>
                 </div>
              </main>
          </section>
          <Footer/>
      </div>
    )
}