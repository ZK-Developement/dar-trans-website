import { useState } from "react";

const galerie = import.meta.glob(
    "../assets/images/album/**/*.{jpg,jpeg,png,webp}",
    {
        eager: true,
        import: "default"
    }
);

const wszystkieZdjecia = Object.values(galerie);

function Galeria() {
    const [otwarteZdjecie, setOtwarteZdjecie] = useState(null);

    function poprzednieZdjecie() {
        setOtwarteZdjecie(prev => {
            if (prev === 0) {
                return wszystkieZdjecia.length - 1;
            }

            return prev - 1;
        });
    }

    function nastepneZdjecie() {
        setOtwarteZdjecie(prev => {
            if (prev === wszystkieZdjecia.length - 1) {
                return 0;
            }

            return prev + 1;
        });
    }

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
                                onClick={() => setOtwarteZdjecie(index)}
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

            {otwarteZdjecie !== null && (
                <div
                    className="lightbox"
                    onClick={() => setOtwarteZdjecie(null)}
                >
                    <button
                        className="lightbox-close"
                        onClick={() => setOtwarteZdjecie(null)}
                    >
                        ×
                    </button>

                    <button
                        className="lightbox-prev"
                        onClick={(e) => {
                            e.stopPropagation();
                            poprzednieZdjecie();
                        }}
                    >
                        ❮
                    </button>

                    <img
                        src={wszystkieZdjecia[otwarteZdjecie]}
                        alt={`Zdjęcie ${otwarteZdjecie + 1}`}
                        className="lightbox-image"
                        onClick={(e) => e.stopPropagation()}
                    />

                    <button
                        className="lightbox-next"
                        onClick={(e) => {
                            e.stopPropagation();
                            nastepneZdjecie();
                        }}
                    >
                        ❯
                    </button>
                </div>
            )}
        </>
    );
}

export default Galeria;