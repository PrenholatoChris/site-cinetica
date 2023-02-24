//import { useState } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Widgets from '../Widgets'
import Services from '../services/Services'


import 'animate.css'
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import './Home.css'
import cineticaBanner from '../assets/cinetica.png'
import instagramIcon from '../assets/instagram.svg'


const Background = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles id="tsparticles"  init={particlesInit} loaded={particlesLoaded} 
        options={{
            "background": {
              "color": {
                "value": "#00000",
              },
            },
            "fpsLimit": 60,
            "interactivity": {
              "detectsOn": "window",
              "events": {
                "onClick": {
                  "enable": true,
                  "mode": "push",
                },
                "onHover": {
                  "enable": true,
                  "mode": "repulse",
                },
                "resize": true,
              },
              "modes": {
                "bubble": {
                  "distance": 400,
                  "duration": 2,
                  "opacity": 0.8,
                  "size": 4,
                },
                "push": {
                  "quantity": 4,
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.4,
                },
              },
            },
            "particles": {
              "color": {
                "value": "#780707",
              },
              "links": {
                "color": "#780707",
                "distance": 200,
                "enable": true,
                "opacity": 0.5,
                "width": 1,
              },
              "collisions": {
                "enable": true,
              },
              "move": {
                "direction": "none",
                "enable": true,
                "outMode": "bounce",
                "random": false,
                "speed": 2,
                "straight": false,
              },
              "number": {
                "density": {
                  "enable": true,
                  "value_area": 800,
                },
                "value": 50,
              },
              "opacity": {
                "value": 0.5,
              },
              "shape": {
                "type": "circle",
              },
              "size": {
                // "random": true,
                "value": 1,
              },
              
            },
            "detectRetina": true,
          }}/>
    );
};

export default function Home(){

    const banner = document.getElementById('banner');
    // banner.addEventListener("click", ()=>{
    //     for (let index = 0; index < 10; index++) {
    //         banner.click()
    //     }
    // });

    return(
        <div className='home'>
            <Header className="header"/>
            
            
            <section>
                <Background/>

                <main>
                    <h3>Coisas boas acontecem para quem faz o bem</h3>
                    <div className='container-carrosel'>
                        <div className='container-side animate__animated animate__backInLeft'>
                            <Widgets link={'https://www.instagram.com/cineticajunior/'}  color={'#780707'} textColor={'#FFFFFF'} icon={instagramIcon} />
                            <Widgets text={'Sites'} color={'#780707'} textColor={'#FFFFFF'}/>
                            <Widgets text={'Sites'} color={'#780707'} textColor={'#FFFFFF'}/>
                        </div>

                        <img id='banner' className='animate__animated animate__backInDown' src={cineticaBanner} alt="" />
                        
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

            <Services/>
            <Footer/>
        </div>
    )
}