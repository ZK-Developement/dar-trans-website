import picon from "../assets/images/phoneicon.png"
import email from "../assets/images/emailicon.png"
import map from "../assets/images/mapicon.png"

function Kontakt (){
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
                            <input type="number" placeholder="Ile osob potrzebujesz przewieść?"required/>
                            <select required>
                                <option>Jaki pojazd potzrebujesz ?</option>
                                <option value="">opcja 1</option>
                                <option value="">opcja 1</option>
                                <option value="">opcja 1</option>
                                <option value="">opcja 1</option>
                                <option value="">opcja 1</option>
                                <option value="">opcja 1</option>
                            </select>
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
                            <div>
                                <img src={email} alt="" />
                                <p>dariuszdukiewicz@wp.pl</p>
                            </div>
                            <div>
                                <img src={picon} alt="" />
                                <p>Tel.+48 604-190-948</p>
                            </div>
                            <div>
                                <img src={map} alt="" />
                                <p>Mąkolno 72 | 57-250 Złoty Stok</p>
                            </div>
                            

                        </div>

                    </div>
                    
                    
                    
                </div>
            </div>
        </center>
        
        </>
    );
}
export default Kontakt;