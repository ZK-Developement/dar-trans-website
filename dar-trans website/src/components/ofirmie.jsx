import placeh from "../assets/images/onasplaceholder.jpg"
import medal1 from "../assets/images/medal1.png"
import medal2 from "../assets/images/medal2.png"
import medal3 from "../assets/images/medal3.png"
import zdj1 from "../assets/images/placeholderzdj1.png"



function Ofirmie (){
    return(
        <>
            <br  id="ofirmie"/>
            <center>
            <div className="main-ofirmie">
                <div className="idk">
                    <p className="mintestidk">​🇭​​🇮​​🇸​​🇹​​🇴​​🇷​​🇮​​🇦​ ​🇳​​🇦​​🇸​​🇿​​🇪​​🇯​ ​🇫​​🇮​​🇷​​🇲​​🇾​</p>
                    <p className="pnag">O naszej Firmie </p>
                </div>

                <div className="blok">
                    <div className="obraz">
                        <img src={zdj1} id="lewo"/>
                    </div>
                    <div className="treść">
                        <p className="nag">Poznaj nas bliżej</p>
                        <p className="mid">Zakład Usług transportowych Dar-Trans Dariusz Dukiewicz  powstał w 
                           1997 roku z inicjatywy zawodowego kierowcy Dariusza Dukiewicza.</p>
                        <p className="mid">Jesteśmy małą firmą zajmującą się transportem osobowym już od ponad 20 lat.</p>
                    </div>
                </div>
                <div className="blokopinie">
                    <div className="medale">
                        <p className="naglow">​🇯​​🇪​​🇸​​🇹​​🇪​​🇸​​🇲​​🇾​ ​🇬​​🇴​​🇩​​🇳​​🇮​ ​🇿​​🇦​​🇺​​🇫​​🇦​​🇳​​🇮​​🇦​</p>
                        <div className="tresc">
                            <img src={medal1}/>
                            <img src={medal2}/>
                            <img src={medal3}/>
                        </div>
                    </div>
                </div>
                <div className="blok">
                    
                    <div className="treść">
                        <p className="nag">Dlaczego wybrać własnie nas ?</p>
                        <p className="mid">Oferujemy konkurencyjne ceny, wysoką jakość usług oraz przede wszystkim dbamy o bezpieczeństwo naszych pasażerów.</p>
                        <p className="mid">Do każdego klienta podchodzimy indywidualnie, co sprawia, że idealnie dostosujemy się do waszych potrzeb.</p>
                    </div>
                    <div className="obraz">
                        <img src={zdj1} id="prawo"/>
                    </div>
                </div>
                <div className="blokopinie">
                    <a target="blank" href="https://www.google.com/maps/place/Zak%C5%82ad+Us%C5%82ug+Transportowych+DAR-TRANS+Dariusz+Dukiewicz/@50.4506663,16.8394131,694m/data=!3m1!1e3!4m8!3m7!1s0x470e1f5486d99e15:0x96b773556315c8c!8m2!3d50.4506663!4d16.8394131!9m1!1b1!16s%2Fg%2F11b6gm85_w?hl=pl&entry=ttu&g_ep=EgoyMDI2MDgwNS4xIKXMDSoASAFQAw%3D%3D"><div className="opinie">
                        <div className="gora">
                            <p className="btext">Wiele pozytywnych opinii</p>
                            <p className="mid">Przez lata naszej działalności zdobyliśmy zaufanie wielu klientów. Sprawdź, co mówią o nas osoby, które skorzystały z naszych usług transportowych.</p>
                        </div>
                        <div>
                            <hr className="linia-opinie"/>
                            <p className="btext">(13) 4.8 <span className="gwiazdki">★★★★★</span></p>
                        </div>
                    </div></a>
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.4433794101988!2d16.8394131!3d50.450666299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470e1f5486d99e15%3A0x96b773556315c8c!2sZak%C5%82ad%20Us%C5%82ug%20Transportowych%20DAR-TRANS%20Dariusz%20Dukiewicz!5e1!3m2!1spl!2spl!4v1785948899385!5m2!1spl!2spl"
                    width="500"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    ></iframe>
                </div>
                <div className="zarezerwuj">
                    <p className="btext">​🇸​​🇰​​🇴​​🇷​​🇿​​🇾​​🇸​​🇹​​🇦​​🇯​ ​🇿​ ​🇳​​🇦​​🇸​​🇿​​🇪​​🇯​ ​🇴​​🇫​​🇪​​🇷​​🇹​​🇾​</p>
                    <p className="cnag">Zarezerwuj przejazd już dziś</p>
                    <p className="text">Zadzwoń i umów się już teraz</p>
                    <p className="text">Tel.+48 604-190-948</p>
                    <button>Kontakt</button>
                    

                </div>
                
            </div>
        </center>
        </>
    );
}
export default Ofirmie;