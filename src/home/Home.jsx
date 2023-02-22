//import { useState } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Widgets from '../Widgets'
import 'animate.css'
import './Home.css'

import cineticaBanner from '../assets/cinetica.png'
import instagramIcon from '../assets/instagram.svg'

export default function Home(){
    return(
        <div className='home'>
            <Header/>
            <section>
                <main>
                    <h3>Coisas boas acontecem para quem faz o bem</h3>
                    <div className='container-carrosel'>
                        <div className='container-side animate__animated animate__backInLeft'>
                            <Widgets link={'https://www.instagram.com/cineticajunior/'}  color={'#780707'} textColor={'#FFFFFF'} icon={instagramIcon} />
                            <Widgets text={'Sites'} color={'#780707'} textColor={'#FFFFFF'}/>
                            <Widgets text={'Sites'} color={'#780707'} textColor={'#FFFFFF'}/>
                        </div>

                        <div className='carrosel animate__animated animate__backInDown'>
                            <img src={cineticaBanner} alt="" />
                        </div>

                        <div className='container-side animate__animated animate__backInRight    '>
                            <Widgets text={'Sites'} color={'#780707'} textColor={'#FFFFFF'}/>
                            <Widgets text={'Sites'} color={'#780707'} textColor={'#FFFFFF'}/>
                            <Widgets text={'Sites'} color={'#780707'} textColor={'#FFFFFF'}/>
                        </div>
                    </div>

                    <div className="destaques">
                        <div className="destaque">
                            <img src="https://picsum.photos/300/200" alt="" />
                            <p>Texto descritivo sobre o destaque sobre o seguinte publicacao da cinetica junior e o destaque sobre o seguinte publicacao da e o destaque sobre o seguinte publicacao da e o destaque sobre o seguinte publicacao da e o destaque sobre o seguinte publicacao da</p>
                        </div>
                        <div className="destaque">
                            <img src="https://picsum.photos/300/200" alt="" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt asperiores, e o destaque sobre o seguinte publicacao da e o destaque sobre o seguinte publicacao dae o destaque sobre o seguinte publicacao da</p>
                        </div>
                        <div className="destaque">
                            <img src="https://picsum.photos/300/200" alt="" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam maiores, voluptate similique sed et nulla dignissimos omnis ipsa sunt facilis qui rerum atque quia, esse aspernatur sit soluta quasi. Fugiat.</p>
                        </div>
                    </div>
                </main>
            </section>
            <Footer/>
        </div>
    )
}