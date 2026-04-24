import zkicon from "../assets/images/icon.png" 
import emailicom from "../assets/images/emailicon.png"
function Footer (){
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
                            </ul>
                        </div>
                        <div className="lista">
                            <p>​​🇭​​🇦​​🇸​​🇱​​🇦​ ​🇸​​🇹​​🇷​​🇴​​🇳​​🇾​​</p>
                            <ul className="listal">
                                <li>Autokary Dolny Śląsk</li>
                                <li>Przewoźnik </li>
                                <li>Firma Przewozowa</li>
                            </ul>
                        </div>
                        <div className="lista">
                            <p>​🇵​​🇴​​🇩​​🇸​​🇹​​🇷​​🇴​​🇳​​🇾​​</p>
                            <ul className="listal">
                                <a href=""><li>Flota</li></a>
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