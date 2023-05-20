import "./About.css"
import galeraImg from '../assets/galera.png'
import Background from '../componentes/Backround/Background'
import Header from "../header/Header"
import Footer from "../footer/Footer";

export default function About(){
    return(
            <div className="About">
                <Background/>
                <Header/>
                <h1>Sobre nós</h1>
                <div className="container">
                    <img id="galera" src={galeraImg} alt="" />
                    <p>Um breve texto descrevendo um pouco sobre a cinética e seus integrantes de forma que faça uma apresentação legal para que possamos botar o texto no site da cinética tal taltal que não sei Lorem ipsum Um breve texto descrevendo um pouco sobre a cinética e seus integrantes de forma que faça uma apresentação legal para que possamos botar o texto no site da cinética tal taltal que não sei Lorem ipsum </p>
                </div>

                <ul>
                    <li>80 Projeots</li>
                    <li>23 Clientes</li>
                    <li>8.7 de nota méidia dos serviços</li>
                    <li>Outros pontos</li>
                </ul>

                <div className="info">
                    <div className="missao">
                        <h2>Missão</h2>
                        <p>Oferecer aos nossos membros condições para desenvolver o conteúdo técnico-profissional e vivência empresarial, executando projetos impactantes e de qualidade com o objetivo de apresentar soluções inovadoras e sustentáveis. Além de integração com o conhecimento científico dos cursos abrangentes e conhecimento individual sobre suas próprias competências.</p>
                    </div>
                    <div>
                        <h2>Visão</h2>
                        <p>Sermos uma empresa reconhecida no estado do Espírito Santo com credibilidade e excelência em nossos serviços de Engenharia e Tecnologia da Informação (TI).</p>
                    </div>
                    <div>
                        <h2>Valores</h2>
                        <p>Orgulho de ser Cinética Júnior;<br></br>
                        Sinergia;<br></br>
                        Criatividade;<br></br>
                        Sustentabilidade ambiental;<br></br>
                        Inclusão e<br></br> 
                        Integridade.</p>
                    </div>
                </div>
                <Footer/>
            </div>

    )
}