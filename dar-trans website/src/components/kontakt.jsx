import picon from "../assets/images/phoneicon.png"
import email from "../assets/images/emailicon.png"
import map from "../assets/images/mapicon.png"
import { Link, useNavigate } from "react-router-dom"

function Kontakt (){
    
    const nav = useNavigate()

    return(
        <>
        <br id="kontakt" />
        <center>
            <div className="main-kontakt">
                <p className="cnag">Skontaktuj się z nami!</p>
                <div className="kontakt-flex">
                    <div className="lewo">
                        <form>
                            <input type="text"placeholder="Imię i nazwisko" required/>
                            <input type="tel" placeholder="48+ 000 000 000"required/>
                            <input type="text" placeholder="Ile osob potrzebujesz przewieść?"required/>
                            <textarea placeholder="Dodatkowe informacje"></textarea>
                            <div>
                                <button>Wyślij</button>
                            </div>
                        </form>
                    </div>
                    <div className="prawo">
                        <div className="top">
                            <h2>Dane kontaktowe</h2>
                        </div>
                        <div className="mid">
                            <p>Masz pytania dotyczące transportu? Potrzebujesz przewozu osób lub chcesz ustalić szczegóły przejazdu?
                               Skontaktuj się z nami. Chętnie odpowiemy na Twoje pytania i ustalimy szczegóły.</p>
                        </div>
                        <div className="bottom">
                            <a href="mailto:dariuszdukiewicz@wp.pl"><div>
                                <img src={email} alt="" />
                                <p>dariuszdukiewicz@wp.pl</p>
                            </div></a>
                            <a href=""><div>
                                <img src={picon} alt="" />
                                <p>Tel.+48 604-190-948</p>
                            </div></a>
                            <a href="https://maps.app.goo.gl/xunEhbdxTXCJqSqH9" target="blank"><div>
                                <img src={map} alt="" />
                                <p>Mąkolno 72 | 57-250 Złoty Stok</p>
                            </div></a>
                        </div>
                    </div>
                </div>
            </div>
        </center>
        
        </>
    );
}
export default Kontakt;