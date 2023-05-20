//import { useState } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import SliderShow from './SliderShow'

import planilha from '../assets/planilha.svg'
import webSite from '../assets/webSite.svg'
import MetodoSite from '../assets/metodoSite.svg'

import './Services.css'

import 'animate.css'
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import React, { useRef, useState, useEffect } from "react";

import ServicesCard from './ServicesCard';


import Background from '../componentes/Backround/Background';

const arrayInf = [
  {
    objIndex: 0,
    texto: 'Planilha',
    image: planilha,
    tituloDoCorpo: 'Planilha Personalizada',
    subtituloDoCorpo1: 'Mas por que ter uma planilha personalizada?',
    textoSubititulo1: (
    <div>
      <ol>
        <li>
          Organização: Uma planilha personalizada pode ajudar a organizar informações importantes, como dados de clientes, registros financeiros, lista de tarefas, inventários, entre outros. Isso ajuda a manter todas as informações necessárias em um só lugar e facilita a consulta.
        </li>
        <li>
          Automatização: Com uma planilha personalizada, você pode automatizar muitas tarefas, como cálculos e classificações. Por exemplo, você pode criar uma planilha para calcular as despesas mensais e receber um resumo instantâneo dos gastos, ou uma planilha para classificar automaticamente os clientes com base em sua atividade recente.
        </li>
        <li>
          Personalização: Uma planilha personalizada pode ser feita sob medida para atender às necessidades específicas do seu negócio ou casa. Você pode escolher as colunas e categorias que deseja incluir, bem como a aparência e a formatação da planilha.
        </li>
        <li>
          Análise de dados: Uma planilha personalizada pode ajudar a analisar dados importantes, como resultados financeiros, desempenho de vendas, ou padrões de consumo. Você pode criar gráficos e tabelas para visualizar os dados e identificar tendências ou oportunidades de melhoria.
        </li>
        <li>
          Acessibilidade: Uma planilha personalizada pode ser acessada de qualquer lugar, desde que você tenha acesso à internet. Isso significa que você pode trabalhar em sua planilha a partir de diferentes dispositivos e locais, ou compartilhar sua planilha com outras pessoas que precisam ter acesso aos dados.
        </li>
      </ol>
      <p>Essas são apenas algumas das vantagens de ter uma planilha personalizada, mas há muitas outras. Se você ainda não tem uma para o seu negócio, considere criar uma com nosso time para aproveitar todas essas vantagens.</p>
    </div>),
    subtituloDoCorpo2: 'Etapas do Desenvolvimento',
    imageSubititulo2: MetodoSite
  },
  {
    objIndex: 1,
    texto: 'Web Site',
    image: webSite,
    tituloDoCorpo: 'Desenvolvimento de Site',
    subtituloDoCorpo1: 'Mas por que ter um Site?',
    textoSubititulo1: (
    <div>
      <ol>
        <li>
          Presença Online: Ter um site permite que você tenha uma presença online, o que é essencial hoje em dia, pois a maioria das pessoas busca informações na internet antes de tomar uma decisão de compra ou contratação de serviços.
        </li>
        <li>
          Maior alcance: Com um site, você pode alcançar uma audiência global, permitindo que sua empresa seja conhecida além das fronteiras geográficas.
        </li>
        <li>
          Credibilidade: Um site bem projetado e atualizado regularmente pode aumentar a credibilidade da sua empresa aos olhos dos consumidores, mostrando que você está presente e comprometido com a sua marca.
        </li>
        <li>
          Marketing Digital: Um site também pode ser uma ferramenta importante para o marketing digital, permitindo que você crie e implemente estratégias de SEO, anúncios pagos, e-mail marketing e outros recursos que podem aumentar sua visibilidade e gerar mais leads e conversões.
        </li>
        <li>
          Comunicação e interação: Um site pode ser usado como um canal de comunicação e interação com seus clientes, permitindo que você responda a perguntas, forneça informações e feedbacks, além de criar um relacionamento mais próximo com o seu público.
        </li>
      </ol>
      <p>Essas são apenas algumas das vantagens de ter um site, mas há muitas outras. Se você ainda não tem um site para o seu negócio, considere criar um com nosso time para aproveitar todas essas vantagens.</p>
    </div>),
    subtituloDoCorpo2: 'Etapas do Desenvolvimento',
    imageSubititulo2: MetodoSite
  },
  {
    objIndex: 2,
    texto: 'Planilha',
    image: planilha,
    tituloDoCorpo: 'Planilha Personalizada',
    subtituloDoCorpo1: 'Mas por que ter uma planilha personalizada?',
    textoSubititulo1: (
    <div>
      <ol>
        <li>
          Organização: Uma planilha personalizada pode ajudar a organizar informações importantes, como dados de clientes, registros financeiros, lista de tarefas, inventários, entre outros. Isso ajuda a manter todas as informações necessárias em um só lugar e facilita a consulta.
        </li>
        <li>
          Automatização: Com uma planilha personalizada, você pode automatizar muitas tarefas, como cálculos e classificações. Por exemplo, você pode criar uma planilha para calcular as despesas mensais e receber um resumo instantâneo dos gastos, ou uma planilha para classificar automaticamente os clientes com base em sua atividade recente.
        </li>
        <li>
          Personalização: Uma planilha personalizada pode ser feita sob medida para atender às necessidades específicas do seu negócio ou casa. Você pode escolher as colunas e categorias que deseja incluir, bem como a aparência e a formatação da planilha.
        </li>
        <li>
          Análise de dados: Uma planilha personalizada pode ajudar a analisar dados importantes, como resultados financeiros, desempenho de vendas, ou padrões de consumo. Você pode criar gráficos e tabelas para visualizar os dados e identificar tendências ou oportunidades de melhoria.
        </li>
        <li>
          Acessibilidade: Uma planilha personalizada pode ser acessada de qualquer lugar, desde que você tenha acesso à internet. Isso significa que você pode trabalhar em sua planilha a partir de diferentes dispositivos e locais, ou compartilhar sua planilha com outras pessoas que precisam ter acesso aos dados.
        </li>
      </ol>
      <p>Essas são apenas algumas das vantagens de ter uma planilha personalizada, mas há muitas outras. Se você ainda não tem uma para o seu negócio, considere criar uma com nosso time para aproveitar todas essas vantagens.</p>
    </div>),
    subtituloDoCorpo2: 'Etapas do Desenvolvimento',
    imageSubititulo2: MetodoSite
  },
  {
    objIndex: 3,
    texto: 'Web Site',
    image: webSite,
    tituloDoCorpo: 'Desenvolvimento de Site',
    subtituloDoCorpo1: 'Mas por que ter um Site?',
    textoSubititulo1: (
    <div>
      <ol>
        <li>
          Presença Online: Ter um site permite que você tenha uma presença online, o que é essencial hoje em dia, pois a maioria das pessoas busca informações na internet antes de tomar uma decisão de compra ou contratação de serviços.
        </li>
        <li>
          Maior alcance: Com um site, você pode alcançar uma audiência global, permitindo que sua empresa seja conhecida além das fronteiras geográficas.
        </li>
        <li>
          Credibilidade: Um site bem projetado e atualizado regularmente pode aumentar a credibilidade da sua empresa aos olhos dos consumidores, mostrando que você está presente e comprometido com a sua marca.
        </li>
        <li>
          Marketing Digital: Um site também pode ser uma ferramenta importante para o marketing digital, permitindo que você crie e implemente estratégias de SEO, anúncios pagos, e-mail marketing e outros recursos que podem aumentar sua visibilidade e gerar mais leads e conversões.
        </li>
        <li>
          Comunicação e interação: Um site pode ser usado como um canal de comunicação e interação com seus clientes, permitindo que você responda a perguntas, forneça informações e feedbacks, além de criar um relacionamento mais próximo com o seu público.
        </li>
      </ol>
      <p>Essas são apenas algumas das vantagens de ter um site, mas há muitas outras. Se você ainda não tem um site para o seu negócio, considere criar um com nosso time para aproveitar todas essas vantagens.</p>
    </div>),
    subtituloDoCorpo2: 'Etapas do Desenvolvimento',
    imageSubititulo2: MetodoSite
  },
]

export default function Services(){

  const [localService, setLocalService] = useState(0); // index dos dados que devem ser lidos do array

  // selecionar o documento com o id que está atualmente no slideShow
  var sla = document.getElementsByClassName('swiper-slide-active')
  let observer = new MutationObserver(mutation => {
    sla = document.getElementsByClassName('swiper-slide-active')
    setLocalService(sla[0].childNodes[0].id)
    // console.log('localId', sla[0].childNodes[0].id) 
  });

  useEffect(() =>{
    // console.log('localService', sla[0]) 
    observer.observe(sla[0], {childList: true, attributes: true, subtree: true});
  })
  
  // setLocalService(document.getElementsByClassName('swiper-slide-active'))
  // console.log('localAtivo', localService[0].childNodes[0]) 

  return(
    <div>
      <div className='services'>
          <Header className="header"/>
          <section>
              <Background/>
              <main>
                <SliderShow arrayInf={arrayInf} />
                <div className='servicesBody'>
                  <div className='servicesTitle'>      
                    <h1>{arrayInf[localService].tituloDoCorpo}</h1>  
                    <div className='servicesCardBlack2'></div>
                  </div>
                  <ServicesCard cond={1} arrayInf={arrayInf} localService={localService}/>
                  <ServicesCard cond={2} arrayInf={arrayInf} localService={localService}/>
                </div>
              </main>
          </section>
          <Footer/>
      </div>
    </div>
  )
}