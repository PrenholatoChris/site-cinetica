//import { useState } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import './Services.css'
import ServicesButton from '../componentes/ServicesButton'


import {services} from '../assets/dados.js'

export default function Services(){
    return(
        <div className='home'>
            <Header/>
            <main>
                <div>
                    <ServicesButton/>
                </div>
                <div className='b1'>
                    <div className='esq'>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Dolor nemo id, voluptas sed odit asperiores iste iusto 
                            neque laborum facere nisi quasi repudiandae modi pariatur 
                            voluptates adipisci hic praesentium dolorem!
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Dolor nemo id, voluptas sed odit asperiores iste iusto 
                            neque laborum facere nisi quasi repudiandae modi pariatur 
                            voluptates adipisci hic praesentium dolorem!
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Dolor nemo id, voluptas sed odit asperiores iste iusto 
                            neque laborum facere nisi quasi repudiandae modi pariatur 
                            voluptates adipisci hic praesentium dolorem!
                        </p>
                    </div>
                    <div className='dir'>
                        <img src={services.img} alt="" />
                    </div>
                </div>
                <div className='videoService'>
                    <video src={video}></video>
                </div>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Dolor nemo id, voluptas sed odit asperiores iste iusto 
                    neque laborum facere nisi quasi repudiandae modi pariatur 
                    voluptates adipisci hic praesentium dolorem!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Dolor nemo id, voluptas sed odit asperiores iste iusto 
                    neque laborum facere nisi quasi repudiandae modi pariatur 
                    voluptates adipisci hic praesentium dolorem!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Dolor nemo id, voluptas sed odit asperiores iste iusto 
                    neque laborum facere nisi quasi repudiandae modi pariatur 
                    voluptates adipisci hic praesentium dolorem!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Dolor nemo id, voluptas sed odit asperiores iste iusto 
                    neque laborum facere nisi quasi repudiandae modi pariatur 
                    voluptates adipisci hic praesentium dolorem!
                </p>
                <div className='etapasServiceImg'>
                    <img src={img2} alt="" />
                </div>
                <div className='etapasService'>
                    <h2>Etapa 1</h2>
                    <h3>Prototipo</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Dolor nemo id, voluptas sed odit asperiores iste iusto 
                        neque laborum facere nisi quasi repudiandae modi pariatur 
                        voluptates adipisci hic praesentium dolorem!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Dolor nemo id, voluptas sed odit asperiores iste iusto 
                        neque laborum facere nisi quasi repudiandae modi pariatur 
                        voluptates adipisci hic praesentium dolorem!
                    </p>
                    <h2>Etapa 2</h2>
                    <h3>Requisitos</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Dolor nemo id, voluptas sed odit asperiores iste iusto 
                        neque laborum facere nisi quasi repudiandae modi pariatur 
                        voluptates adipisci hic praesentium dolorem!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Dolor nemo id, voluptas sed odit asperiores iste iusto 
                        neque laborum facere nisi quasi repudiandae modi pariatur 
                        voluptates adipisci hic praesentium dolorem!
                    </p>
                    <h2>Etapa 3</h2>
                    <h3>Construção</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Dolor nemo id, voluptas sed odit asperiores iste iusto 
                        neque laborum facere nisi quasi repudiandae modi pariatur 
                        voluptates adipisci hic praesentium dolorem!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Dolor nemo id, voluptas sed odit asperiores iste iusto 
                        neque laborum facere nisi quasi repudiandae modi pariatur 
                        voluptates adipisci hic praesentium dolorem!
                    </p>
                    <h2>Etapa 4</h2>
                    <h3>Validação</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Dolor nemo id, voluptas sed odit asperiores iste iusto 
                        neque laborum facere nisi quasi repudiandae modi pariatur 
                        voluptates adipisci hic praesentium dolorem!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Dolor nemo id, voluptas sed odit asperiores iste iusto 
                        neque laborum facere nisi quasi repudiandae modi pariatur 
                        voluptates adipisci hic praesentium dolorem!
                    </p>
                </div>
            </main>
            <Footer/>
        </div>
    )
}