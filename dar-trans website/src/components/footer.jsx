import zkicon from "../assets/images/icon.png" 
import emailicom from "../assets/images/emailicon.png"
function Footer (){
    return(
        <>
            <center>
                <footer>
                    <a href="https://zk-dev-web.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <div className="zkad">
                        <img src={zkicon} alt="zkicon" />
                        <p className="btext">Developement</p>
                        <p className="mintext">WEBSITE MADE BY :</p>
                    </div>
                    </a>
                    <div className="polpryw">
                        <p className="midtext">Polityka Prywatności</p>

                    </div>

                    <a href="mailto:dariuszdukiewicz@wp.pl">
                    <div className="emailfoot">
                        <img src={emailicom} alt="emailicon" />
                        <p className="btext">dariuszdukiewicz@wp.pl</p>
                    </div>
                    </a>
                </footer>
            </center>
        </>

    );
}
export default Footer;