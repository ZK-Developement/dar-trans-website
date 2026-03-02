import icon from "../assets/images/logo.png"
import picon from "../assets/images/phoneicon.png"
function Header ()
{
    return(
        <>
        <center>
            <header>
                <a href="#">
                <div className="flex">
                    <img src={icon} alt="icon" />
                    <div>
                        <p className="pnag">DAR-TRANS</p>
                        <p className="text">Zakład Usług Transportowych DAR-TRANS Dariusz Dukiewicz</p>

                    </div>
                </div>
                </a>
                <div>
                    <ul className="flex">
                        <a href="#"><li>O Nas</li></a>
                        <a href="#"><li>Flota</li></a>
                        <a href="#"><li>Oferta</li></a>
                        <a href="#"><li>Kontakt</li></a>
                    </ul>
                </div>
                <a href="#" className="kontakta">
                <div className="kontakt">
                    <img src={picon} alt="phoneicon" className="picon" />
                    <p className="btext">Kontakt</p>
                </div>
                </a>
                
            </header>
        </center>

        </>

    );
}
export default Header; 