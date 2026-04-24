import zkicon from "../assets/images/icon.png" 
import emailicom from "../assets/images/emailicon.png"
import { Link, useNavigate } from "react-router-dom"

function Footer (){

    const nav = useNavigate()

    return(
        <>
            <center>
                <footer>
                    <div className="footerh">
                        
                        <div className="lista">
                            <p>​🇰​​🇴​​🇳​​🇹​​🇦​​🇰​​🇹​</p>
                            <ul className="listal">
                                <a href="" className=""><li>Tel.+48 604-190-948</li></a>
                                <a href="" className=""><li>e-mail.dariuszdukiewicz@wp.pl</li></a>
                                <br />
                                <li className="godziny">Poniedziałek—piątek: 8:00-20:00</li>
                                <li className="godziny">Sobota & Niedziela: 10:00-20:00</li>
                            </ul>
                        </div>
                        <div className="lista">
                            <p>​​🇭​​🇦​​🇸​​🇱​​🇦​ ​🇸​​🇹​​🇷​​🇴​​🇳​​🇾​​</p>
                            <ul className="listal">
                                <li>Autokary Dolny Śląsk</li>
                                <li>Przewoźnik </li>
                                <li>Firma Przewozowa</li>
                                <li>Przewozy na ternie całej polski</li>
                                <li>Obsługa wycieczek</li>
                                <li>Przewóz gości weselnych</li>
                                <li>Duża przestrzeń bagażowa</li>
                                <li>Doświadczeni kierowcy</li>
                            </ul>
                        </div>
                        <div className="lista">
                            <p>​🇵​​🇴​​🇩​​🇸​​🇹​​🇷​​🇴​​🇳​​🇾​​</p>
                            <ul className="listal">
                                <li 
                                    onClick={() => {
                                    nav("/")
                                    setTimeout(() => {
                                        document.getElementById("glowna")?.scrollIntoView({ behavior: "smooth" })
                                    }, 100)
                                    }}
                                >
                                    Strona Główna
                                </li>
                                <li 
                                    onClick={() => {
                                    nav("/Flota")
                                    setTimeout(() => {
                                        document.getElementById("glowna")?.scrollIntoView({ behavior: "smooth" })
                                    }, 100)
                                    }}
                                >
                                    Nasza Flota
                                </li>
                                <li 
                                    onClick={() => {
                                    nav("/O-Firmie")
                                    setTimeout(() => {
                                        document.getElementById("glowna")?.scrollIntoView({ behavior: "smooth" })
                                    }, 100)
                                    }}
                                >
                                    O Nas
                                </li>
                                <a href=""><li>Galeria</li></a>
                                <a href=""><li>Kontakt</li></a>
                                <a href=""><li>Polityka Prywatności</li></a>
                            </ul>
                        </div>
                        
                    </div>
                <div className="footer">
                    <div className="wpz">
                        <p className="midtext">© 2026 Dar-Trans — Wszelkie prawa zastrzeżone</p>
                        <a href="https://zkdev.pl" target="_blank" rel="noopener noreferrer">
                            <div className="adzk">
                                <p className="midtext">Strona napisana przez:</p>
                                <img src={zkicon} alt="zkicon" />
                                <p className="midtext"><span className="zkadad">Development</span></p>
                            </div>
                        </a>
                    </div>
                </div>
                </footer>
            </center>
        </>

    );
}
export default Footer;