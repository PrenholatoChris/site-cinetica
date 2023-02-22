//import cadeadoImg from "./assets/cadeado.svgh"
import "./Footer.css"
import logoImg from '../assets/logo.svg'

export default function Footer(){
    return(
        <div className="footer">
            <img src={logoImg} alt="logo da cinéticajr" />
            <a href="mailto:timecineticajunior@gmail.com">timecineticajunior@gmail.com</a>
            <a href="https://www.instagram.com/cineticajunior/">@cineticajunior</a>
            <a href="">cnpj:9999-999/99</a>
        </div>
    )
}