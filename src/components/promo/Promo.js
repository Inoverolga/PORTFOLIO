import "./promo.scss";
import { FaGithub } from "react-icons/fa";
import close from "../../assets/images/Close.svg";
import { useState } from "react";

function Promo() {
    const [isActive, setIsActive] = useState(false); // Состояние для меню

    const toggleMenu = () => {
        setIsActive(!isActive); // Переключаем состояние
    };

    const isClose = () => {
        setIsActive(isActive === false);
    };

    return (
        <>
            <div className={`menu ${isActive ? "active" : null}`}>
                <div className="menu__block">
                    <div className="wrapper__icon">
                        <a
                            href="https://github.com/Inoverolga?tab=repositories"
                            className="icon"
                        >
                            <FaGithub />
                        </a>
                        <img
                            src={close}
                            alt="close"
                            className="close"
                            onClick={isClose}
                        />
                    </div>

                    <ul className="list__wrapper">
                        <li className="item">
                            <a href="#aboutme">ПРО МЕНЯ</a>
                        </li>
                        <li className="item">
                            <a href="#experience">МОЙ ОПЫТ</a>
                        </li>
                        <li className="item">
                            <a href="#skills">МОИ НАВЫКИ</a>
                        </li>
                        <li className="item">
                            <a href="#portfolio">МОИ РАБОТЫ</a>
                        </li>
                        <li className="item">
                            <a href="#contacts">КОНТАКТЫ</a>
                        </li>
                    </ul>
                </div>
                <div className="menu__overlay"></div>
            </div>

            <section className="promo">
                <div className="humburger" onClick={toggleMenu}>
                    <span className="line-first"></span>
                    <span className="line-second"></span>
                    <span className="line-third"></span>
                </div>
                <div className="container">
                    <div className="title title__fz16 promo__subtitle">
                        Меня зовут Ольга Иновер
                    </div>
                    <h1 className="title title__fz48">
                        Я начинающий web-разработчик <br /> из города Мозырь
                    </h1>
                    <div className="promo__btns btn">
                        <a
                            href="#portfolio"
                            className="promo__link promo__link-first"
                        >
                            Портфолио
                        </a>
                        <a href="#aboutme" className="promo__link">
                            Про меня
                        </a>
                    </div>
                </div>
                <aside className="sidepenal">
                    <div className="sidepenal__wrapper">
                        <p className="sidepenal__messengers">GitHub</p>
                        <span className="sidepenal__line"></span>
                        <a
                            href="https://github.com/Inoverolga?tab=repositories"
                            className="sidepenal__icon"
                        >
                            <FaGithub />
                        </a>
                    </div>
                </aside>
            </section>
        </>
    );
}

export default Promo;
