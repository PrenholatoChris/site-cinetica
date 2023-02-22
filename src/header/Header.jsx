import cadeadoImg from "../assets/cadeado.png"
import "./Header.css"

export default function Header(){
    return(
        <div className="header">
            <a href="home">Home</a>
            <a href="contato">Contato</a>
            <a href="sobre">Sobre</a>
            <a href="serviços">Serviços</a>
            <a href="cadeado">
                <img src={cadeadoImg} alt="Imagem de um cadeado" />
            </a>
        </div>
    )
}

export function teste(){
    return(
        <h1>Cetabu</h1>
    )
}

export function teste1(){
    return(
        <h1>Cetabucetaooo</h1>
    )
}