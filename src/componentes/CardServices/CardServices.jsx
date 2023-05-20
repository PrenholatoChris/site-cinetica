import React from "react"
import "./CardServices.css"

export default function CardServices({arrayInf}){
    return(
        <div className="cardServiceBackground">
            <div className="cardServiceTexto">
                <p>{arrayInf.texto}</p>
            </div>
            <div className="cardServiceIcon">
                <img src={arrayInf.image} alt="" />
            </div>
            <div>
                <div className="cardServiceBlackLine">

                </div>
                <div className="cardServiceRedLine">
                    
                </div>
            </div>
        </div>
    )
}