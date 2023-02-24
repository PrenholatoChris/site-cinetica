//import { useState } from 'react'
import './Services.css'
// import ServicesButton from '../componentes/ServicesButton'

export default function Services(){

    const site1 = {
        nome: "site",
        text1: "abcdefgh",
        text2: "ojdhfdgfdhfdsf",
        img1: "./logo.svg",
        video: "./carrosel.jps",
        text3: "jfhsdgf9ajfdfdsfisdf",
        img2: "./logo.svg",
    }
    var services = []

    
    services = [site1]



    return(
        <div className='services'>
            
             <main>
                <div>
                    {/* <ServicesButton/> */}
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
                        <img src={services[0].img1} alt="" />
                    </div>
                </div>
                <div className='videoService'>
                    <video src={services[0].video}></video>
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
                    <img src={services[0].img2} alt="" />
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
        </div>
    )
}