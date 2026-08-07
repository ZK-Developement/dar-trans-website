import logo from "../assets/images/logodt.svg"

function Polityka (){
    return(
        <>
        <br id="polityka"/>
        <center>
            <div className="main-polityka">
                <div className="top">
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    <p className="cnag">Polityka Prywatności firmy</p>
                    <div>
                        <p className="btext">04.08.2026</p>
                    </div>
                </div>
                <div className="mid">
                    <div className="navpolityka">
                    <p className="btext">Navigacja po polityce</p>
                        <ul>
                            <a href="#1"><li>1. Postanowienia ogólne</li></a>
                            <a href="#2"><li>2. Jakie dane są zbierane</li></a>
                            <a href="#3"><li>3. Cel i podstawa prawna przetwarzania danych</li></a>
                            <a href="#4"><li>4. Formularz kontaktowy</li></a>
                            <a href="#5"><li>5. Przekazywanie danych poza Europejski Obszar Gospodarczy</li></a>
                            <a href="#6"><li>6. Odbiorcy danych</li></a>
                            <a href="#7"><li>7. Okres przechowywania danych</li></a>
                            <a href="#8"><li>8. Prawa użytkownika</li></a>
                            <a href="#9"><li>9. Zautomatyzowane podejmowanie decyzji i profilowanie</li></a>
                            <a href="#10"><li>10. Pliki cookies i podobne technologie</li></a>
                            <a href="#11"><li>11. Bezpieczeństwo danych</li></a>
                            <a href="#12"><li>12. Dane osób niepełnoletnich</li></a>
                            <a href="#13"><li>13. Dobrowolność podania danych</li></a>
                            <a href="#14"><li>14. Zmiany Polityki prywatności</li></a>
                        </ul >
                        <a href="#polityka"><div className="powrotnag">
                            <p>Powrót na Górę</p>
                        </div></a>
                    </div >
                    <br id="1" />
                    <p className="cnag" >Polityka prywatności</p>
                    <div className="podpunkt" >
                        <div className="top">
                            <p className="btext">1.</p>
                            <p className="btext">Postanowienia ogólne</p>
                        </div>
                        <div className="bottom">
                            <p className="text">
                                1. Niniejsza Polityka prywatności określa zasady przetwarzania danych osobowych osób korzystających ze strony internetowej [ADRES STRONY] oraz korzystających z formularza kontaktowego.
                            </p>
                            <p className="text" id="2">
                            2. Administratorem danych osobowych jest: <br/>
                            [Nazwa firmy transportowej]<br/>
                            [Adres siedziby]<br/>
                            [NIP]<br/>
                            [REGON, jeżeli dotyczy]<br/>
                            e-mail: [ADRES E-MAIL]<br/>
                            dalej zwany „Administratorem”.<br/>
                            </p>
                            <p className="text " >
                                3. Administrator przetwarza dane osobowe zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. („RODO”) oraz właściwymi przepisami prawa obowiązującymi na terytorium Rzeczypospolitej Polskiej.
                            </p>
                        </div>
                    </div>
                    <div className="podpunkt">
                        <div className="top">
                            <p className="btext">2.</p>
                            <p className="btext">Jakie dane są zbierane</p>
                        </div>
                        <div className="bottom">
                            <p className="text">
                                1. Za pośrednictwem formularza kontaktowego Administrator może zbierać następujące dane:<br/>
                                a) imię i nazwisko,<br/>
                                b) numer telefonu,<br/>
                                c) liczbę osób planujących skorzystać z transportu,<br/>
                                d) informacje dotyczące wybranego lub potrzebnego pojazdu,<br/>
                                e) dodatkowe informacje wpisane przez użytkownika w formularzu.<br/>
                            </p>
                            <p className="text" id="3">
                            2. Użytkownik powinien przekazywać w formularzu wyłącznie dane niezbędne do obsługi zapytania.
                            </p>
                            <p className="text " >
                                3. Pole „Dodatkowe informacje” może zawierać dane wpisane dobrowolnie przez użytkownika. Administrator prosi o nieprzekazywanie za pośrednictwem formularza danych szczególnych kategorii, o których mowa w art. 9 RODO, jeżeli nie jest to niezbędne do realizacji konkretnej sprawy.
                            </p>
                        </div>
                    </div>
                    <div className="podpunkt">
                        <div className="top">
                            <p className="btext">3.</p>
                            <p className="btext">Cel i podstawa prawna przetwarzania danych</p>
                        </div>
                        <div className="bottom">
                            <p className="text">
                                1. Dane osobowe przekazane za pośrednictwem formularza kontaktowego są przetwarzane w celu:<br/>
                                a) przyjęcia i obsługi zapytania dotyczącego usług transportowych,<br/>
                                b) kontaktu z osobą, która przesłała formularz,<br/>
                                c) przygotowania odpowiedzi lub oferty,<br/>
                                d) podjęcia działań na żądanie osoby przed zawarciem umowy,<br/>
                                e) dochodzenia lub obrony przed ewentualnymi roszczeniami.<br/>
                            </p>
                            <p className="text">
                                2. Podstawą prawną przetwarzania danych jest art. 6 ust. 1 lit. b RODO, jeżeli przetwarzanie jest niezbędne do podjęcia działań na żądanie osoby przed zawarciem umowy lub do wykonania umowy.
                            </p>
                            <p className="text ">
                                3. W zakresie niezbędnym do zabezpieczenia interesów Administratora, w szczególności w celu ustalenia, dochodzenia lub obrony przed roszczeniami, podstawą prawną jest art. 6 ust. 1 lit. f RODO.
                            </p>
                            <p className="text " id="4">
                                4. Jeżeli przepisy prawa będą wymagały przechowywania określonych danych, Administrator może przetwarzać je również na podstawie art. 6 ust. 1 lit. c RODO.
                            </p>
                            <p className="text ">
                                5. Dane przekazane w formularzu nie są wykorzystywane do celów marketingowych bez odpowiedniej podstawy prawnej.
                            </p>
                        </div>
                    </div>
                    <div className="podpunkt">
                        <div className="top">
                            <p className="btext">4.</p>
                            <p className="btext">Formularz kontaktowy</p>
                        </div>
                        <div className="bottom">
                            <p className="text">
                                1. Formularz kontaktowy służy do przesyłania zapytań dotyczących usług oferowanych przez Administratora.
                            </p>
                            <p className="text">
                                2. Po wysłaniu formularza dane są przekazywane do usługi Web3Forms, która technicznie przetwarza zgłoszenie i przekazuje jego treść na wskazany przez Administratora firmowy adres poczty elektronicznej.
                            </p>
                            <p className="text ">
                                3. Web3Forms jest zewnętrznym dostawcą usługi obsługującej formularz kontaktowy. Usługa działa jako zewnętrzna infrastruktura techniczna wykorzystywana do przekazywania zgłoszeń.
                            </p>
                            <p className="text ">
                                4. Web3Forms wskazuje, że jego serwery znajdują się w Stanach Zjednoczonych, w regionie US-East. Oznacza to, że dane przesyłane za pośrednictwem formularza mogą być przekazywane i przetwarzane poza Europejskim Obszarem Gospodarczym.
                            </p>
                            <p className="text " id="5">
                                5. Web3Forms deklaruje, że zgłoszenia formularzy są przechowywane przez 30 dni w przypadku planu bezpłatnego oraz przez okres do 1 roku w przypadku planu Pro. Dostawca wskazuje również, że dane identyfikujące znajdujące się w logach serwerowych są okresowo usuwane.
                            </p>
                            <p className="text ">
                                6. Administrator korzysta z Web3Forms wyłącznie w zakresie niezbędnym do obsługi formularza kontaktowego.
                            </p>
                        </div>
                    </div>
                    <div className="podpunkt">
                        <div className="top">
                            <p className="btext">5.</p>
                            <p className="btext">Przekazywanie danych poza Europejski Obszar Gospodarczy</p>
                        </div>
                        <div className="bottom">
                            <p className="text">
                                1. W związku z korzystaniem z usług Web3Forms dane osobowe mogą być przekazywane do Stanów Zjednoczonych.
                            </p>
                            <p className="text">
                                2. Przekazywanie danych poza Europejski Obszar Gospodarczy odbywa się z zastosowaniem mechanizmu przewidzianego przez RODO, odpowiedniego dla danego przekazania.
                            </p>
                            <p className="text " id="6">
                                3. Informacje dotyczące stosowanych przez dostawcę mechanizmów ochrony danych należy weryfikować w aktualnej dokumentacji i warunkach usługi Web3Forms.
                            </p>
                            <p className="text ">
                                4. Administrator nie przekazuje danych osobowych poza Europejski Obszar Gospodarczy w innych celach, niż wskazane w niniejszej Polityce prywatności, chyba że istnieje odpowiednia podstawa prawna.
                            </p>
                        </div>
                    </div>
                    <div className="podpunkt">
                        <div className="top">
                            <p className="btext">6.</p>
                            <p className="btext">Odbiorcy danych</p>
                        </div>
                        <div className="bottom">
                            <p className="text">
                                1. Dane osobowe mogą być przekazywane podmiotom, które wspierają Administratora w prowadzeniu działalności, wyłącznie w zakresie niezbędnym do realizacji określonego celu.
                            </p>
                            <p className="text" id="7">
                                2. W szczególności odbiorcą danych może być:<br/>
                                a) dostawca usługi formularza kontaktowego Web3Forms,<br/>
                                b) dostawca firmowej poczty elektronicznej,<br/>
                                c) dostawca hostingu lub infrastruktury technicznej strony,<br/>
                                d) podmioty świadczące usługi księgowe, prawne lub informatyczne, jeżeli będzie to niezbędne,<br/>
                                e) organy publiczne i inne podmioty uprawnione na podstawie przepisów prawa.<br/>
                            </p>
                            <p className="text">
                                3. Administrator nie sprzedaje danych osobowych użytkowników.
                            </p>
                        </div>
                    </div>
                    <div className="podpunkt">
                        <div className="top">
                            <p className="btext">7.</p>
                            <p className="btext">Okres przechowywania danych</p>
                        </div>
                        <div className="bottom">
                            <p className="text">
                                1. Dane przesłane za pośrednictwem formularza są przechowywane przez okres niezbędny do obsługi zapytania i prowadzenia dalszego kontaktu.
                            </p>
                            <p className="text">
                                2. Jeżeli w wyniku kontaktu nie dojdzie do zawarcia umowy, dane mogą być przechowywane przez okres niezbędny do zakończenia obsługi zapytania, a następnie usuwane lub anonimizowane, chyba że ich dalsze przechowywanie jest uzasadnione przepisami prawa lub koniecznością obrony przed roszczeniami.
                            </p>
                            <p className="text ">
                                3. Jeżeli zostanie zawarta umowa, dane będą przechowywane przez okres wymagany przez przepisy prawa oraz przez okres niezbędny do zabezpieczenia ewentualnych roszczeń.
                            </p>
                            <p className="text " id="8">
                                4. Okres przechowywania danych może zależeć od rodzaju danych, celu ich przetwarzania oraz obowiązków wynikających z przepisów prawa.
                            </p>
                            <p className="text ">
                                5. Dane przetwarzane przez Web3Forms mogą podlegać okresom przechowywania określonym przez tego dostawcę. Aktualna dokumentacja Web3Forms wskazuje 30 dni przechowywania zgłoszeń na planie bezpłatnym oraz 1 rok na planie Pro.
                            </p>
                        </div>
                    </div>
                    <div className="podpunkt">
                        <div className="top">
                            <p className="btext">8.</p>
                            <p className="btext">Prawa użytkownika</p>
                        </div>
                        <div className="bottom">
                            <p className="text">
                                2. Osobie, której dane dotyczą, przysługuje, na zasadach określonych w RODO:<br/>
                                a) prawo dostępu do swoich danych,<br/>
                                b) prawo do sprostowania danych,<br/>
                                c) prawo do usunięcia danych,<br/>
                                d) prawo do ograniczenia przetwarzania,<br/>
                                e) prawo do przenoszenia danych, jeżeli znajduje zastosowanie,<br/>
                                f) prawo wniesienia sprzeciwu wobec przetwarzania opartego na prawnie uzasadnionym interesie Administratora,<br/>
                                g) prawo wniesienia skargi do organu nadzorczego.<br/>
                            </p>
                            <p className="text">
                                2. W celu skorzystania z przysługujących praw należy skontaktować się z Administratorem pod adresem:<br/>
                                [ADRES E-MAIL]<br/>
                            </p>
                            <p className="text" id="9">
                                3. Administrator odpowiada na żądania dotyczące praw osoby, której dane dotyczą, zgodnie z terminami określonymi w RODO.
                            </p>
                            <p className="text">
                                4. Osoba, której dane dotyczą, ma prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych, jeżeli uzna, że przetwarzanie jej danych osobowych narusza przepisy dotyczące ochrony danych osobowych.
                            </p>
                        </div>
                    </div>
                    <div className="podpunkt">
                        <div className="top">
                            <p className="btext">9.</p>
                            <p className="btext">Zautomatyzowane podejmowanie decyzji i profilowanie</p>
                        </div>
                        <div className="bottom">
                            <p className="text" id="10">
                                1. Dane przesyłane za pośrednictwem formularza kontaktowego nie są wykorzystywane do podejmowania decyzji opartych wyłącznie na zautomatyzowanym przetwarzaniu danych, które wywoływałyby wobec użytkownika skutki prawne lub w podobny sposób istotnie na niego wpływały.
                            </p>
                            <p className="text">
                                2. Administrator nie prowadzi profilowania użytkowników na podstawie danych przesyłanych za pośrednictwem formularza kontaktowego.
                            </p>
                        </div>
                    </div>
                    <div className="podpunkt">
                        <div className="top">
                            <p className="btext">10.</p>
                            <p className="btext">Pliki cookies i podobne technologie</p>
                        </div>
                        <div className="bottom">
                            <p className="text">
                                1. Strona internetowa nie wykorzystuje plików cookies w celu prowadzenia analityki, reklamy, profilowania ani śledzenia użytkowników.
                            </p>
                            <p className="text">
                                2. trona nie korzysta z narzędzi takich jak Google Analytics, Meta Pixel ani innych podobnych systemów analitycznych lub reklamowych, o ile nie zostały one dodane w przyszłości.
                            </p>
                            <p className="text " id="11">
                                3. Zewnętrzne usługi techniczne mogą stosować własne mechanizmy techniczne niezbędne do zapewnienia bezpieczeństwa i działania swoich usług. Dotyczy to w szczególności usługi obsługującej formularz kontaktowy.
                            </p>
                            <p className="text ">
                                4. W przypadku dodania w przyszłości narzędzi analitycznych, reklamowych, funkcjonalnych lub innych technologii wymagających zgody użytkownika, niniejsza Polityka prywatności zostanie odpowiednio zaktualizowana, a jeżeli będzie to wymagane przepisami prawa, użytkownik otrzyma możliwość dokonania wyboru w zakresie stosowania takich technologii.
                            </p>
                        </div>
                    </div>
                    <div className="podpunkt">
                        <div className="top">
                            <p className="btext">11.</p>
                            <p className="btext">Bezpieczeństwo danych</p>
                        </div>
                        <div className="bottom">
                            <p className="text">
                                1. Administrator stosuje odpowiednie środki techniczne i organizacyjne mające na celu ochronę danych osobowych przed ich przypadkowym lub niezgodnym z prawem zniszczeniem, utratą, zmianą, nieuprawnionym ujawnieniem lub dostępem.
                            </p>
                            <p className="text" id="12">
                                2. Dostęp do danych osobowych mają wyłącznie osoby i podmioty uprawnione do ich przetwarzania w związku z wykonywaniem swoich obowiązków.
                            </p>
                            <p className="text ">
                                3. Administrator podejmuje działania mające na celu ograniczenie zakresu przetwarzanych danych do danych niezbędnych do realizacji określonych celów.
                            </p>
                        </div>
                    </div>
                    <div className="podpunkt">
                        <div className="top">
                            <p className="btext">12.</p>
                            <p className="btext">Dane osób niepełnoletnich</p>
                        </div>
                        <div className="bottom">
                            <p className="text" id="13">
                                1. Strona internetowa nie jest kierowana szczególnie do osób małoletnich.
                            </p>
                            <p className="text">
                                2. Administrator nie zamierza świadomie zbierać danych osób małoletnich bez odpowiedniej podstawy prawnej.
                            </p>
                        </div>
                    </div>
                    <div className="podpunkt">
                        <div className="top">
                            <p className="btext">13.</p>
                            <p className="btext">Dobrowolność podania danych</p>
                        </div>
                        <div className="bottom">
                            <p className="text" id="14">
                                1. Podanie danych w formularzu kontaktowym jest dobrowolne, jednak może być niezbędne do udzielenia odpowiedzi na zapytanie lub przygotowania oferty.
                            </p>
                            <p className="text">
                                2. Niepodanie danych niezbędnych do kontaktu może uniemożliwić Administratorowi obsługę zapytania.
                            </p>
                        </div>
                    </div>
                    <div className="podpunkt">
                        <div className="top">
                            <p className="btext">14.</p>
                            <p className="btext">Zmiany Polityki prywatności</p>
                        </div>
                        <div className="bottom">
                            <p className="text">
                                1. Administrator może aktualizować niniejszą Politykę prywatności w szczególności w przypadku:<br/>
                                a) zmiany przepisów prawa,<br/>
                                b) zmiany sposobu funkcjonowania strony,<br/>
                                c) rozpoczęcia korzystania z nowych usług lub narzędzi,<br/>
                                d) zmiany sposobu przetwarzania danych osobowych.<br/>
                            </p>
                            <p className="text">
                                Aktualna wersja Polityki prywatności jest publikowana na stronie internetowej Administratora.
                            </p>
                            <p className="text">
                                3. Data ostatniej aktualizacji: [ do uzupełnienia]
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <p className="ctext">©2026 Dar-Trans. Wszelkie prawa zastrzeżone.</p>
                </div>
            </div>
        </center>
        
        </>
    );
}
export default Polityka;