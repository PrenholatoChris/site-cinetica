import './Services.css'

import React, { useRef, useState } from "react";

export default function ServicesCard({cond, arrayInf, localService}){

  if(cond == 1){
    return(
      <div className='servicesCardBody'>
          <div className='servicesCardTitle'>
              <p>{arrayInf[localService].subtituloDoCorpo1}</p>
          </div>
          <div className='servicesCardInfo'>{arrayInf[localService].textoSubititulo1}</div>
          <div className='servicesCardBlack'></div>
          <div className='servicesCardRed'></div>
      </div>
    )
  }else if(cond == 2){ 
    return(
      <div className='servicesCardBody'>
          <div className='servicesCardTitle'>
              <p>{arrayInf[localService].subtituloDoCorpo2}</p>
          </div>
          <div className='servicesCardInfo'>
            <img src={arrayInf[localService].imageSubititulo2} alt="" />
          </div>
          <div className='servicesCardBlack'></div>
          <div className='servicesCardRed'></div>
      </div>
    )
  }
  
}