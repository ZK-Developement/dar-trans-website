import flotapl from "../assets/images/flota-placeholder.png"
import ford from "../assets/images/ford.jpg"
import merc from "../assets/images/merc.jpeg"
import noge from "../assets/images/noge.jpeg"
import domino from "../assets/images/domino.jpg"
import vanhol from "../assets/images/vanholl.jpeg"


function Galeria (){
    return(
        <>
        <br  id="galeria"/>
        <center>
            <div className="main-galeria">
                <p className="cnag">Galeria - Przejrzyj zdjęcia zaszej floty oraz relacje z trasy</p>
                <div className="galeriamain">
                    <img src={ford}/>
                    <img src={merc}/>
                    <img src={noge}/>
                    <img src={domino}/>
                    <img src={vanhol}/>
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
export default Galeria;