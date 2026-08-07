import autokar1 from "../assets/images/autokar1.svg"
import icon from "../assets/images/logodt.svg"
import iconw from "../assets/images/dartrans logo redesign-white.svg"
import polska from "../assets/images/polska.svg"
import coachph from "../assets/images/coachplaceholder.svg"
import mercedes from "../assets/images/merc.jpeg"
import noge from "../assets/images/noge.jpeg"
import vanhool from "../assets/images/vanholl.jpeg"
import domino from "../assets/images/domino.jpg"
import manicon from "../assets/images/manicon.png"
import bazafirm from "../assets/images/bazafirm.gif"
import medal from "../assets/images/medal.png"
import picon from "../assets/images/phoneicon.png"
import staricon from "../assets/images/staricon.png"
import expicon from "../assets/images/expicon.png"
import zdj1 from "../assets/images/placeholderzdj1.png"
import { Link, useNavigate } from "react-router-dom"

function Maindt (){
    return(
        <>
        <center>
            <br  id="glowna"/>
            <main className="main-onas">
                <div className="onas-glowna">
                    <div className="lewo">
                        <div className="onas-firma">
                            <img src={iconw} alt="logofirmy" />
                        </div>
                        <br id="oferta"/>
                        <div className="info1">
                            <div className="info">
                                <img src={picon}/>
                                <div>
                                    <p className="infohtext">​​🇸​​🇰​​🇴​​🇳​​🇹​​🇦​​🇰​​🇹​​🇺​​🇯​ ​🇸​​🇮​​🇪​ ​🇿​ ​🇳​​🇦​​🇲​​🇮​​</p>
                                    <p className="infoltext">Tel.+48 604-190-948</p>
                                </div>
                                
                            </div>
                            <div className="info">
                                <img src={staricon}/>
                                <div>
                                    <p className="infohtext">​🇯​​🇦​​🇰​​🇴​​🇸​​🇨​ ​🇺​​🇸​​🇱​​🇺​​🇬​</p>
                                    <p className="infoltext">4.8 Oceny klientów</p>
                                </div>
                                
                            </div>
                            <div className="info">
                                <img src={expicon}/>
                                <div>
                                    <p className="infohtext">​🇩​​🇴​​🇸​​🇼​​🇮​​🇦​​🇩​​🇨​​🇿​​🇪​​🇳​​🇮​​🇪​</p>
                                    <p className="infoltext">Ponad 20 lat doświadczenia</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="oferta">
                    <br />
                    <br />
                    <div className="oferta-dol">
                        <div className="xdxd">
                            <img src={zdj1} />
                            <div className="prawo">
                                <p className="nag">Jesteśmy tu specjalnie dla Ciebie.</p>
                                <br />
                                <p className="text">Zajmujemy się obsługą grup wycieczkowych, szkolnych i firmowych. Dobieramy pojazd do wielkości grupy i potrzeb klienta. Nasze auta mają duże bagażniki i klimatyzację, co zapewnia komfort podróży.</p>
                                <br />
                                <p className="text">Organizujesz wesele, wyjazd firmowy lub imprezę? Oferujemy transport także w nocy. Możesz wynająć samochód z kierowcą na kilka godzin lub całą noc.</p>
                            </div>
                        </div>
                    </div>
                    <div className="oferta-dol">
                        <div className="xdxd">
                            <div className="prawo">
                                <p className="nag">Pomożemy Ci dotrzeć do celu,niezależnie od tego czy podróżujesz sam czy dużą grupą.</p>
                                <br />
                                <p className="text">Dbamy o punktualność i bezpieczeństwo na każdym etapie podróży, więc nie tracisz czasu i jedziesz bez stresu.</p>
                                <br />
                                <p className="text">Nasi kierowcy posiadają doświadczenie oraz dobrą znajomość tras, co przekłada się na sprawny i terminowy przejazd. Elastycznie reagujemy na zmiany planów i dostosowujemy się do potrzeb klienta. </p>
                                <br />
                                <p className="text">Zapewniamy sprawny kontakt oraz jasne warunki współpracy, a proces rezerwacji jest szybki i przejrzysty.</p>
                            </div>
                            <img src={zdj1} />
                        </div>
                        
                    </div>
                </div>
                <div className="onas-dol">
                    <div className="onas-dol-dol">
                        <img src={polska} alt="zdjpolski" className="polska" />
                        <div className="lewo">
                            <p className="nag">Przewozy na terenie całej Polski</p>
                            <br />
                            <p className="">W ofercie posiadamy zarówno duże autokary turystyczne 55-cio osobowe jak i mniejsze 35-cio, 20-sto osobowe jak i busy 8-mio osobowe. Nasze samochody są klimatyzowane i wygodne, posiadają pakowne luki bagażowe, ale najważniejsze, że zawsze bezpiecznie dowiozą was tam, i z powrotem.</p>
                            <p className="">Każdy klient rozliczany jest indywidualnie, przy dłuższej współpracy proponujemy atrakcyjne warunki. </p>
                        </div >
                        
                    </div>
                </div>
                <div className="idk">
                    <p className="mintestidk">​🇸​​🇰​​🇴​​🇳​​🇹​​🇦​​🇰​​🇹​​🇺​​🇯​ ​🇸​​🇮​​🇪​ ​🇿​ ​🇳​​🇦​​🇲​​🇮​​</p>
                    <p className="pnag">Skontaktuj się z nami aby dowiedzieć się więcej o naszych usługach.​</p>
                    <button>Kontakt</button>
                </div>
                <div className="zarezerwuj">
                    <p className="btext">​🇸​​🇰​​🇴​​🇷​​🇿​​🇾​​🇸​​🇹​​🇦​​🇯​ ​🇿​ ​🇳​​🇦​​🇸​​🇿​​🇪​​🇯​ ​🇴​​🇫​​🇪​​🇷​​🇹​​🇾​</p>
                    <p className="cnag">Zarezerwuj przejazd już dziś</p>
                    <p className="text">Zadzwoń i umów się już teraz</p>
                    <p className="text">Tel.+48 604-190-948</p>
                    <button>Kontakt</button>
                    

                </div>

            </main>
        </center>
            
        </>
    );
}
export default Maindt