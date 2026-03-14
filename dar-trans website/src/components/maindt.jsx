import autokar1 from "../assets/images/autokar1.svg"
import icon from "../assets/images/logo.png"
import polska from "../assets/images/polska.svg"
import coachph from "../assets/images/coachplaceholder.svg"
import mercedes from "../assets/images/mercedes.png"
import ford from "../assets/images/ford.jpg"
import noge from "../assets/images/noge.png"
import vanhool from "../assets/images/vanhool.png"
import domino from "../assets/images/domino.png"
import manicon from "../assets/images/manicon.png"
function Maindt (){
    return(
        <>
        <center>
            <br id="onas"/>
            <main className="main-onas">
                <div className="onas-glowna">
                    <div className="lewo">
                        <div className="onas-firma">
                            <img src={icon} alt="logofirmy" />
                            <p className="mintext">Zakład Usług Transportowych Dar-Trans Dariusz Dukiewicz</p>
                        </div>
                        <div>
                            <p className="text">Jesteśmy tu specjalnie <b>dla Ciebie.</b></p>
                            <p className="text">Pomożemy Ci dotrzeć do celu,niezależnie od tego czy podróżujesz <b>sam</b> czy <b>dużą grupą.</b></p>
                            <p className="btext">Zapraszamy do zapoznania się z naszą ofertą.</p>
                        </div>
                    </div>
                    <div className="prawo">
                        <img src={autokar1} alt="autokar" />
                    </div>
                </div>
            
                <div className="onas-dol">
                    <p className="pnag">Przewozy na terenie całej Polski</p>
                    <hr className="onas-dol-linia"/>
                    <br />
                    <div className="onas-dol-dol">
                        <div className="lewo">
                            <p className="text">W ofercie posiadamy zarówno duże autokary turystyczne 55-cio osobowe jak i mniejsze 35-cio, 20-sto osobowe jak i busy 8-mio osobowe. Nasze samochody są klimatyzowane i wygodne, posiadają pakowne luki bagażowe, ale najważniejsze, że zawsze bezpiecznie dowiozą was tam, i z powrotem.</p>
                            <p className="text">Każdy klient rozliczany jest indywidualnie, przy dłuższej współpracy proponujemy atrakcyjne warunki. </p>
                        </div >
                        <img src={polska} alt="zdjpolski" />
                    </div>
                </div>
                <br id="flota"/>
                <div className="flota">
                    <p className="pnag">Nasza Flota :</p>
                    <hr className="flota-linia"/>
                    <br />
                    <div className="flota-auto">
                        <div className="lewo"> <img src={ford} alt="Zdjęcie autokaru" /></div>
                        <div className="prawo">
                            <p className="pnag">Ford Transit <span className="categorytext"> 17 Miejsc</span></p>
                            <hr className="flota-auto-linia"/>
                            <br />
                            <p className="flota-mintext">Lorem ipsum for isis meritumLorem ipsum for isis meritumLorem ipsum for isis meritumLorem ipsum for isis meritumLorem ipsum for isis meritumLorem ipsum for isis meritumLorem ipsum for isis meritumLorem ipsum for isis meritum</p>
                            <button className="flota-btn">Kontakt</button>
                        </div>
                    </div>
                    <div className="flota-auto">
                        <div className="lewo"> <img src={mercedes} alt="Zdjęcie autokaru" /></div>
                        <div className="prawo">
                            <p className="pnag">Mercedes Sprinter <span className="categorytext"> 20 Miejsc</span></p>
                            <hr className="flota-auto-linia"/>
                            <br />
                            <p className="flota-mintext">Lorem ipsum for isis meritumLorem ipsum for isis meritumLorem ipsum for isis meritumLorem ipsum for isis meritumLorem ipsum for isis meritumLorem ipsum for isis meritumLorem ipsum for isis meritumLorem ipsum for isis meritum</p>
                            <button className="flota-btn">Kontakt</button>
                        </div>
                    </div>
                    <div className="flota-auto">
                        <div className="lewo"> <img src={noge} alt="Zdjęcie autokaru" /></div>
                        <div className="prawo">
                            <p className="pnag">Irisbus Noge <span className="categorytext"> 35 Miejsc</span></p>
                            <hr className="flota-auto-linia"/>
                            <br />
                            <p className="flota-mintext">Lorem ipsum for isis meritumLorem ipsum for isis meritumLorem ipsum for isis meritumLorem ipsum for isis meritumLorem ipsum for isis meritumLorem ipsum for isis meritumLorem ipsum for isis meritumLorem ipsum for isis meritum</p>
                            <button className="flota-btn">Kontakt</button>
                        </div>
                    </div>
                    <div className="flota-auto">
                        <div className="lewo"> <img src={vanhool} alt="Zdjęcie autokaru" /></div>
                        <div className="prawo">
                            <p className="pnag">VanHool T916 <span className="categorytext"> 59 Miejsc</span></p>
                            <hr className="flota-auto-linia"/>
                            <br />
                            <p className="flota-mintext">Lorem ipsum for isis meritumLorem ipsum for isis meritumLorem ipsum for isis meritumLorem ipsum for isis meritumLorem ipsum for isis meritumLorem ipsum for isis meritumLorem ipsum for isis meritumLorem ipsum for isis meritum</p>
                            <button className="flota-btn">Kontakt</button>
                        </div>
                    </div>
                    <div className="flota-auto">
                        <div className="lewo"> <img src={domino} alt="Zdjęcie autokaru" /></div>
                        <div className="prawo">
                            <p className="pnag">Irisbus Domino <span className="categorytext"> 53 Miejsc</span></p>
                            <hr className="flota-auto-linia"/>
                            <br />
                            <p className="flota-mintext">Lorem ipsum for isis meritumLorem ipsum for isis meritumLorem ipsum for isis meritumLorem ipsum for isis meritumLorem ipsum for isis meritumLorem ipsum for isis meritumLorem ipsum for isis meritumLorem ipsum for isis meritum</p>
                            <button className="flota-btn">Kontakt</button>
                        </div>
                    </div>

                </div>
                <br id="oferta"/>\
                <div className="oferta">
                    <p className="pnag">Nasza Oferta : </p>
                    <hr className="kontakt-linia"/>
                    <br />

                </div>
                <br id="kontakt"/>
                <div className="kontakt-div">
                    <p className="pnag">Kontakt </p>
                    <hr className="kontakt-linia"/>
                    <br /><br />
                    <p className="pnagc">Zakład Usług Transportowych DAR – TRANS</p>
                    <br /><br />
                    <div className="kontakt-in">
                        
                        <div className="profil">
                            <img src={manicon} alt="manicon" />
                            <div className="profil-lewo">
                                <p className="btext">Dariusz Dukiewicz</p>
                                <p className="text"><a href="mailto:dariuszdukiewicz@wp.pl">dariuszdukiewicz@wp.pl</a></p>
                            </div>
                            <hr className="profil-hr"></hr>
                            <div className="profil-lewo">
                                <p className="text">Mąkolno 72</p>
                                <p className="text">57-250 Złoty Stok</p>
                                <p className="text">tel. +48 604-190-948</p>
                            </div>
                        </div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.48641531305!2d16.8394131!3d50.450666299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470e1f5486d99e15%3A0x96b773556315c8c!2sZak%C5%82ad%20Us%C5%82ug%20Transportowych%20DAR-TRANS%20Dariusz%20Dukiewicz!5e0!3m2!1spl!2spl!4v1773505207678!5m2!1spl!2spl" 
                           className="mapa" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </main>
        </center>
            
        </>
    );
}
export default Maindt