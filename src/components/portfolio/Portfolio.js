import "./portfolio.scss";
import ceramic from "../../assets/images/image.png";
import portfolio from "../../assets/images/image copy.png";
import coffee from "../../assets/images/Mask Group.jpg";
import marvel from "../../assets/images/Marvel_Studios_logo.svg.png";

const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio">
            <div className="container">
                <h4 className="title title__fz16 title__portfolio">
                    Портфолио
                </h4>
                <h2 className="title title__fz36 title__portfolio-h2">
                    Мои работы
                </h2>
                <span className="line"></span>
                <div className="portfolio__grid">
                    <a
                        href="https://inoverolga.github.io/ceramic-soul/"
                        className="portfolio__item portfolio__item-ceramic"
                    >
                        <img src={ceramic} alt="ceramic" />
                    </a>
                    <a
                        href="https://inoverolga.github.io/Rose-test-/"
                        className="portfolio__item portfolio__item-rose"
                    >
                        <img src={portfolio} alt="rose-portfolio" />
                    </a>
                    <a
                        href="https://inoverolga.github.io/coffee/"
                        className="portfolio__item portfolio__item-coffee"
                    >
                        <img src={coffee} alt="marvel" />
                    </a>
                    <a
                        href="https://inoverolga.github.io/marvel/"
                        className="portfolio__item portfolio__item-marvel"
                    >
                        <img src={marvel} alt="marvel" />
                    </a>
                </div>
            </div>
        </section>
    );
};
export default Portfolio;
