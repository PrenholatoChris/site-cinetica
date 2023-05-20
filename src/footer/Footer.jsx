import logoWhite from "../assets/cinetica2.png"
import gmail from "../assets/gmail.svg"
import instagram from "../assets/insta.svg"
import whatsaap from "../assets/whatsaap.svg"
import { Link } from "react-router-dom";
import "./Footer.css"


export default function Footer(){
    return(
        <div className="footerRed">
            <div className="footerGray">
                <div className="informacoesFooter">
                    <p>
                        Powered by Cinética Jr<br/>
                        CNPJ: 25.254.274/00001-74
                    </p>
                </div>
                <div className='logoWhiteFooter'>
                    <img src={logoWhite} alt="" />    
                </div>
                <div className="linksSociaisFooter">
                    <Link to="https://stackoverflow.com/questions/51533178/click-an-image-for-outside-url-react-js">
                        <img src={gmail} alt="" />
                    </Link>
                    <Link to="https://stackoverflow.com/questions/51533178/click-an-image-for-outside-url-react-js">
                        <img src={instagram} alt="" />
                    </Link>
                    <Link to="https://stackoverflow.com/questions/51533178/click-an-image-for-outside-url-react-js">
                        <img src={whatsaap} alt="" />
                    </Link>
                </div>
            </div>
            
        </div>
    )
}