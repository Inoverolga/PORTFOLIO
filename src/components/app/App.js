import AboutMe from "../aboutMe/AboutMe";
import Benefit from "../benefit/Benefit";
import Contacts from "../contacts/Contacts";
import Portfolio from "../portfolio/Portfolio";
import Promo from "../promo/Promo";
import Technology from "../technology/Technology";

import "./app.scss";

function App() {
    return (
        <div className="app">
            <Promo />
            <AboutMe />
            <Benefit />
            <Technology />
            <Portfolio />
            <Contacts />
        </div>
    );
}

export default App;
