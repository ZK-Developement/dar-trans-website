import icon from "../assets/images/logo.png"
import picon from "../assets/images/phoneicon.png"
function Header ()
{
    return(
        <>
        <center>
            <header>
                <a href="https://dar-trans.vercel.app/">
                <div className="flex">
                    <img src={icon} alt="icon" />
                    <div>
                        <p className="pnag">DAR-TRANS</p>
                        <p className="text">Zakład Usług Transportowych DAR-TRANS Dariusz Dukiewicz</p>

                    </div>
                </div>
                </a>
                <div>
                    <nav>
                    <ul className="flex">
                        <a href="#onas"><li>O Nas</li></a>
                        <a href="#flota"><li>Flota</li></a>
                        <a href="#oferta"><li>Oferta</li></a>
                        <a href="#kontakt"><li>Kontakt</li></a>
                    </ul>
                    </nav>
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