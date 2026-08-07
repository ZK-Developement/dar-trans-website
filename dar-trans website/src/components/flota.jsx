import { useState } from "react";

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

function getGaleria(nazwa) {
    return Object.entries(galerie)
        .filter(([sciezka]) => sciezka.includes(`/${nazwa}/`))
        .map(([, zdjecie]) => zdjecie);
}

function Flota() {
    const [duzeZdjecia, setDuzeZdjecia] = useState({
        TRANSIT: ford,
        SPRINTER: merc,
        NOGE: noge,
        DOMINO: domino,
        VANHOOL: vanhol
    });

    return (
        <>
            <center>
                <br id="flota" />

                <div className="main-flota">
                    <center>

                        <div className="idk">
                            <p className="mintestidk">
                                ​🇳​​🇦​​🇸​​🇿​​🇦​ ​🇫​​🇱​​🇴​​🇹​​🇦​​​
                            </p>
                            <p className="pnag">
                                Zobacz co oferuje nasza Firma.​
                            </p>
                        </div>

                        {/* TRANSIT */}
                        <div className="autokar-div">
                            <div className="prawo">
                                <div className="dd1">
                                    <p className="btext">01.</p>
                                </div>

                                <div className="flex">
                                    <div className="d1">
                                        <p className="pnag">
                                            ​🇫​​🇴​​🇷​​🇩​ ​🇹​​🇷​​🇦​​🇳​​🇸​​🇮​​🇹​
                                        </p>
                                        <p className="textl">Ilość miejsc: 17</p>
                                        <p className="textl">Norma emisji spalin: EURO VI</p>
                                        <p className="textl">Rok produkcji: 2017</p>
                                    </div>

                                    <div className="d1">
                                        <p className="pnag">​​🇴​​🇵​​🇮​​🇸​​</p>
                                        <p className="textl">
                                            Idealny pod male wyjazdy grupowe.
                                            Potrzebujesz transportu na lotnisko, lub potrzebujesz roziwieść gości
                                            po imprezie ?
                                        </p>
                                        <p className="textl">
                                            ​​Bus będzie idealny do takich zleceń.​
                                        </p>
                                    </div>
                                </div>

                                <center>
                                    <div className="galeria">
                                        {getGaleria("TRANSIT").map((zdjecie, index) => (
                                            <img
                                                key={index}
                                                src={zdjecie}
                                                alt={`Transit ${index + 1}`}
                                                className="galimg"
                                                onClick={() =>
                                                    setDuzeZdjecia(prev => ({
                                                        ...prev,
                                                        TRANSIT: zdjecie
                                                    }))
                                                }
                                            />
                                        ))}
                                    </div>
                                </center>
                            </div>

                            <div className="lewo">
                                <img src={duzeZdjecia.TRANSIT} alt="Ford Transit" />
                            </div>
                        </div>

                        {/* SPRINTER */}
                        <div className="autokar-div">
                            <div className="prawo">
                                <div className="dd1">
                                    <p className="btext">02.</p>
                                </div>

                                <div className="flex">
                                    <div className="d1">
                                        <p className="pnag">
                                            ​​🇲​​🇪​​🇷​​🇨​​🇪​​🇩​​🇪​​🇸​ ​🇸​​🇵​​🇷​​🇮​​🇳​​🇹​​🇪​​🇷​​
                                        </p>
                                        <p className="textl">Ilość miejsc: 20</p>
                                        <p className="textl">Norma emisji spalin: EURO VI</p>
                                        <p className="textl">Rok produkcji: 2017</p>
                                    </div>

                                    <div className="d1">
                                        <p className="pnag">​​🇴​​🇵​​🇮​​🇸​​</p>
                                        <p className="textl">
                                            Idealny pod male wyjazdy grupowe.
                                            Potrzebujesz transportu na lotnisko, lub potrzebujesz roziwieść gości
                                            po imprezie ?
                                        </p>
                                        <p className="textl">
                                            ​​Bus będzie idealny do takich zleceń.​
                                        </p>
                                    </div>
                                </div>

                                <center>
                                    <div className="galeria">
                                        {getGaleria("SPRINTER").map((zdjecie, index) => (
                                            <img
                                                key={index}
                                                src={zdjecie}
                                                alt={`Sprinter ${index + 1}`}
                                                className="galimg"
                                                onClick={() =>
                                                    setDuzeZdjecia(prev => ({
                                                        ...prev,
                                                        SPRINTER: zdjecie
                                                    }))
                                                }
                                            />
                                        ))}
                                    </div>
                                </center>
                            </div>

                            <div className="lewo">
                                <img src={duzeZdjecia.SPRINTER} alt="Mercedes Sprinter" />
                            </div>
                        </div>

                        {/* NOGE */}
                        <div className="autokar-div">
                            <div className="prawo">
                                <div className="dd1">
                                    <p className="btext">03.</p>
                                </div>

                                <div className="flex">
                                    <div className="d1">
                                        <p className="pnag">
                                            ​🇮​​🇷​​🇮​​🇸​​🇧​​🇺​​🇸​ ​🇳​​🇴​​🇬​​🇪​​
                                        </p>
                                        <p className="textl">Ilość miejsc: 35</p>
                                        <p className="textl">Norma emisji spalin: EURO VI</p>
                                        <p className="textl">Rok produkcji: 2017</p>
                                    </div>

                                    <div className="d1">
                                        <p className="pnag">​​🇴​​🇵​​🇮​​🇸​​</p>
                                        <p className="textl">
                                            Idealny pod male wyjazdy grupowe.
                                            Potrzebujesz transportu na lotnisko, lub potrzebujesz roziwieść gości
                                            po imprezie ?
                                        </p>
                                        <p className="textl">
                                            ​​Bus będzie idealny do takich zleceń.​
                                        </p>
                                    </div>
                                </div>

                                <center>
                                    <div className="galeria">
                                        {getGaleria("NOGE").map((zdjecie, index) => (
                                            <img
                                                key={index}
                                                src={zdjecie}
                                                alt={`Noge ${index + 1}`}
                                                className="galimg"
                                                onClick={() =>
                                                    setDuzeZdjecia(prev => ({
                                                        ...prev,
                                                        NOGE: zdjecie
                                                    }))
                                                }
                                            />
                                        ))}
                                    </div>
                                </center>
                            </div>

                            <div className="lewo">
                                <img src={duzeZdjecia.NOGE} alt="Irisbus Noge" />
                            </div>
                        </div>

                        {/* DOMINO */}
                        <div className="autokar-div">
                            <div className="prawo">
                                <div className="dd1">
                                    <p className="btext">04.</p>
                                </div>

                                <div className="flex">
                                    <div className="d1">
                                        <p className="pnag">
                                            ​​🇮​​🇷​​🇮​​🇸​​🇧​​🇺​​🇸​ ​🇩​​🇴​​🇲​​🇮​​🇳​​🇴​​
                                        </p>
                                        <p className="textl">Ilość miejsc: 53</p>
                                        <p className="textl">Norma emisji spalin: EURO VI</p>
                                        <p className="textl">Rok produkcji: 2017</p>
                                    </div>

                                    <div className="d1">
                                        <p className="pnag">​​🇴​​🇵​​🇮​​🇸​​</p>
                                        <p className="textl">
                                            Idealny pod male wyjazdy grupowe.
                                            Potrzebujesz transportu na lotnisko, lub potrzebujesz roziwieść gości
                                            po imprezie ?
                                        </p>
                                        <p className="textl">
                                            ​​Bus będzie idealny do takich zleceń.​
                                        </p>
                                    </div>
                                </div>

                                <center>
                                    <div className="galeria">
                                        {getGaleria("DOMINO").map((zdjecie, index) => (
                                            <img
                                                key={index}
                                                src={zdjecie}
                                                alt={`Domino ${index + 1}`}
                                                className="galimg"
                                                onClick={() =>
                                                    setDuzeZdjecia(prev => ({
                                                        ...prev,
                                                        DOMINO: zdjecie
                                                    }))
                                                }
                                            />
                                        ))}
                                    </div>
                                </center>
                            </div>

                            <div className="lewo">
                                <img src={duzeZdjecia.DOMINO} alt="Irisbus Domino" />
                            </div>
                        </div>

                        {/* VANHOOL */}
                        <div className="autokar-div">
                            <div className="prawo">
                                <div className="dd1">
                                    <p className="btext">05.</p>
                                </div>

                                <div className="flex">
                                    <div className="d1">
                                        <p className="pnag">
                                            ​🇻​​🇦​​🇳​​🇭​​🇴​​🇴​​🇱​
                                        </p>
                                        <p className="textl">Ilość miejsc: 59</p>
                                        <p className="textl">Norma emisji spalin: EURO VI</p>
                                        <p className="textl">Rok produkcji: 2017</p>
                                    </div>

                                    <div className="d1">
                                        <p className="pnag">​​🇴​​🇵​​🇮​​🇸​​</p>
                                        <p className="textl">
                                            Idealny pod male wyjazdy grupowe.
                                            Potrzebujesz transportu na lotnisko, lub potrzebujesz roziwieść gości
                                            po imprezie ?
                                        </p>
                                        <p className="textl">
                                            ​​Bus będzie idealny do takich zleceń.​
                                        </p>
                                    </div>
                                </div>

                                <center>
                                    <div className="galeria">
                                        {getGaleria("VANHOOL").map((zdjecie, index) => (
                                            <img
                                                key={index}
                                                src={zdjecie}
                                                alt={`Vanhool ${index + 1}`}
                                                className="galimg"
                                                onClick={() =>
                                                    setDuzeZdjecia(prev => ({
                                                        ...prev,
                                                        VANHOOL: zdjecie
                                                    }))
                                                }
                                            />
                                        ))}
                                    </div>
                                </center>
                            </div>

                            <div className="lewo">
                                <img src={duzeZdjecia.VANHOOL} alt="Vanhool" />
                            </div>
                        </div>

                        <div className="zarezerwuj">
                            <p className="btext">
                                ​🇸​​🇰​​🇴​​🇷​​🇿​​🇾​​🇸​​🇹​​🇦​​🇯​ ​🇿​ ​🇳​​🇦​​🇸​​🇿​​🇪​​🇯​ ​🇴​​🇫​​🇪​​🇷​​🇹​​🇾​
                            </p>
                            <p className="cnag">Zarezerwuj przejazd już dziś</p>
                            <p className="text">Zadzwoń i umów się już teraz</p>
                            <p className="text">Tel.+48 604-190-948</p>
                            <button>Kontakt</button>
                        </div>

                    </center>
                </div>
            </center>
        </>
    );
}

export default Flota;