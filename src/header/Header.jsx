//import cadeadoImg from "./assets/cadeado.svgh"
import "./Header.css"

export default function Header(){
    return(
        <div className="header">
            <a href="home">Home
            </a><a href="contato">Contato
            </a><a href="sobre">Sobre
            </a><a href="serviços">Serviçoes
            </a><a href="cadeado">
                <img /*src={cadeadoImg}*/ alt="Imagem de um cadeado" />
            </a>
        </div>
    )
}