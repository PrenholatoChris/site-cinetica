import "./Contact.css"
import instagramImg from '../assets/instagram.svg'
import gmailImg from '../assets/gmail.png'
import Background from '../componentes/Backround/Background'
import Header from "../header/Header"
import Footer from "../footer/Footer";

export default function Contact(){
    return(
        <div className="Contact">
             <Background/>
                <Header/>
            <h1>Contato</h1>
            <div className="container">
                <nav>
                    <div className="email">
                        <img src={gmailImg} alt="" />
                        <a target="_blank" href="mailto:cineticajr@gmail.com">cineticajr@gmail.com</a>
                    </div>
                    <div className="instagram">
                        <img src={instagramImg} alt="" />
                        <a target="_blank" href="https://www.instagram.com/cineticajunior/">cineticajr</a>
                    </div>
                    <button>
                        Agende seu Horário
                    </button>
                </nav>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3730.719237328242!2d-41.53864078824516!3d-20.762170864682783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbbebc41cf68f0f%3A0x769a09325b3ebaa2!2sCin%C3%A9tica%20Jr.!5e0!3m2!1spt-BR!2sbr!4v1683513114139!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Footer/>
        </div>
    )
}