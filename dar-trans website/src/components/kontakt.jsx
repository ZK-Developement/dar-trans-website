import picon from "../assets/images/phoneicon.png"

function Kontakt (){
    return(
        <>
        <center>
            <div className="main-flota">
                <div className="kontakt-img">

                </div>
                <p className="cnag">Dane Kontaktowe</p>
                <div className="kontakt-flex">
                    <div className="dkontakt">
                        <img src={picon} alt="icon" />
                        <p className="pnag">Telefon</p>
                        <div className="flex">
                            <img src={picon} alt="icon" />
                            <div>
                                <p className="btext">Dariusz Dukiewicz</p>
                                <p className="text">Tel.+48 604-190-948</p>
                            </div>
                        </div>
                    </div>
                    <div className="dkontakt">
                        <img src={picon} alt="icon" />
                        <p className="pnag">Telefon</p>
                        <div className="flex">
                            <img src={picon} alt="icon" />
                            <div>
                                <p className="btext">Dariusz Dukiewicz</p>
                                <p className="text">Tel.+48 604-190-948</p>
                            </div>
                        </div>
                    </div>
                    <div className="dkontakt">
                        <img src={picon} alt="icon" />
                        <p className="pnag">Telefon</p>
                        <div className="flex">
                            <img src={picon} alt="icon" />
                            <div>
                                <p className="btext">Dariusz Dukiewicz</p>
                                <p className="text">Tel.+48 604-190-948</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </center>
        
        </>
    );
}
export default Kontakt;