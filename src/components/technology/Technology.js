import "./technology.scss";
import html from "../../assets/images/html5.jpg";
import scss from "../../assets/images/css3.svg";
import js from "../../assets/images/JS.svg";
import react from "../../assets/images/React.svg";
import typescript from "../../assets/images/image 1.png";

const Technology = () => {
    return (
        <section id="skills" className="technology">
            <div className="container">
                <h4 className="title title__fz16 title__benefit">Навыки</h4>
                <h2 className="title title__fz36 title__benefit-h2">
                    Что я использую в работе
                </h2>
                <span className="line"></span>
                <div className="grid__wrapper">
                    <div className="technology__grid technology__html">
                        <img
                            src={html}
                            alt="html"
                            className="technology__html"
                        />
                        <h5 className="title title__fz14 technology__title ">
                            HTML5
                        </h5>
                        <p className="technology__content">
                            Именно он создает каркас вашего сайта или
                            приложения, а пятая версия позволит мне создавать
                            более SEO-оптимизированную структуру вашего продукта
                        </p>
                    </div>

                    <div className="technology__grid technology__scss">
                        <img
                            src={scss}
                            alt="scss"
                            className="technology__scss"
                        />
                        <h5 className="title title__fz14 technology__title ">
                            CSS3
                        </h5>
                        <p className="technology__content">
                            Этот язык стилей позволяет мне создавать абсолютно
                            любой внешний вид вашего сайта или приложения. Все
                            ограничивается только вашей фантазией!
                        </p>
                    </div>

                    <div className="technology__grid technology__js">
                        <img src={js} alt="js" className="technology__js" />
                        <h5 className="title title__fz14 technology__title ">
                            Java Script
                        </h5>
                        <p className="technology__content">
                            Этот язык программирования позволяет оживить все что
                            угодно: слайдеры, окна, подсказки, вкладки,
                            получение данных от сервера и многое другое
                        </p>
                    </div>

                    <div className="technology__grid technology__react">
                        <img
                            src={react}
                            alt="react"
                            className="technology__react"
                        />
                        <h5 className="title title__fz14 technology__title ">
                            React
                        </h5>
                        <p className="technology__content">
                            Эта библиотека позволяет создавать web-приложения.
                            Мы можем создать максимально интерактивный продукт
                            именно под ваши цели
                        </p>
                    </div>

                    <div className="technology__grid technology__typescript">
                        <img
                            src={typescript}
                            alt="typescript"
                            className="technology__typescript"
                        />
                        <h5 className="title title__fz14 technology__title ">
                            TypeScript
                        </h5>
                        <p className="technology__content">
                            Позволяет "отлавливать" ошибки до запуска кода и
                            делать разработку более предсказуемой и
                            масштабируемой
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Technology;
