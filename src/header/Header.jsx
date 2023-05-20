import cadeadoImg from '../assets/cadeado.png'
import logoWhite from "../assets/cinetica2.png"
import { Link } from "react-router-dom";
import "./Header.css"

export default function Header(){
    return(
        <div className="headerRed">
            <div className="headerGray">
                <div className='logoWhite'>
                    <img src={logoWhite} alt="" />    
                </div>
                <Link to="/">
                    <p>Home</p>
                </Link>
                <Link to="/services">
                    <p>Serviços</p>
                </Link>
                <Link to="/about">
                    <p>Sobre</p>
                </Link>
                <Link to="/contact">
                    <p>Contatos</p>
                </Link>
                <Link to="">
                    <img src={cadeadoImg} alt="" />
                </Link>
            </div>
            
        </div>
    )
}