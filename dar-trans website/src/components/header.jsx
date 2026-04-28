import icon from "../assets/images/logodt.svg"
import picon from "../assets/images/phoneicon.png"
import { Link, useNavigate } from "react-router-dom"
function Header ()
{
    const nav = useNavigate()

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
                            nav("/")
                            setTimeout(() => {
                                document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })
                            }, 100)
                            }}
                        >
                            Oferta
                        </li>

                    <li
                            onClick={() => {
                            nav("/Flota")
                            setTimeout(() => {
                                document.getElementById("glowna")?.scrollIntoView({ behavior: "smooth" })
                            }, 100)
                            }}
                        >
                            Flota
                        </li>
                    <li><Link to="/o-firmie">O Firmie</Link></li>
                    </ul>
                    </nav>
                </div>
                
                
                <div className="kontakt"
                onClick={() => {
                            nav("/Kontakt")
                            setTimeout(() => {
                                document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })
                            }, 100)
                            }}
                >
                    <img src={picon} alt="phoneicon" className="picon" />
                    <p className="btext">Kontakt</p>
                </div>
                
                
            </header>
        </center>

        </>

    );
}
export default Header; 