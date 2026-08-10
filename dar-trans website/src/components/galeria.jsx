import flotapl from "../assets/images/flota-placeholder.png";
import ford from "../assets/images/ford.jpg";
import merc from "../assets/images/merc.jpeg";
import noge from "../assets/images/noge.jpeg";
import domino from "../assets/images/domino.jpg";
import vanhol from "../assets/images/vanholl.jpeg";

const galerie = import.meta.glob(
    "../assets/images/album/**/*.{jpg,jpeg,png,webp}",
    {
        eager: true,
        import: "default"
    }
);

const wszystkieZdjecia = Object.values(galerie);

function Galeria() {
    return (
        <>
            <br id="galeria" />
            <center>
                <div className="main-galeria">
                    <p className="cnag">
                        Galeria - Przejrzyj zdjęcia zaszej floty oraz relacje z trasy
                    </p>

                    <div className="galeriamain">
                        {wszystkieZdjecia.map((zdjecie, index) => (
                            <img
                                key={index}
                                src={zdjecie}
                                alt={`Zdjęcie ${index + 1}`}
                            />
                        ))}
                    </div>

                    <div className="zarezerwuj">
                        <p className="btext">
                            ​🇸​​🇰​​🇴​​🇷​​🇿​​🇾​​🇸​​🇹​​🇦​​🇯​ ​🇿​ ​🇳​​🇦​​🇸​​🇿​​🇪​​🇯​ ​🇴​​🇫​​🇪​​🇷​​🇹​​🇾​
                        </p>
                        <p className="cnag">
                            Zarezerwuj przejazd już dziś
                        </p>
                        <p className="text">
                            Zadzwoń i umów się już teraz
                        </p>
                        <p className="text">
                            Tel.+48 604-190-948
                        </p>
                        <button>Kontakt</button>
                    </div>
                </div>
            </center>
        </>
    );
}

export default Galeria;