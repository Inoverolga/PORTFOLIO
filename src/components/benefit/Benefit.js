import "./benefit.scss";
import university from "../../assets/icons/University.svg";
import curs from "../../assets/icons/Courses.svg";
import developer from "../../assets/icons/Developer.svg";

const Benefit = () => {
    return (
        <section id="experience" className="benefit">
            <div className="container">
                <h4 className="title title__fz16 title__benefit">Опыт</h4>
                <h2 className="title title__fz36 title__benefit-h2">
                    Чем я буду полезна
                </h2>
                <span className="line"></span>
                <div className="benefit__grid">
                    <div className="benefit__column">
                        <h3 className="title title__fz20 title__resume">
                            Образование
                        </h3>
                        <ul>
                            <li>
                                <div className="benefit__resume-item">
                                    <div className="benefit__resume-item-head">
                                        <div className="benefit__resume-item-icon">
                                            <img
                                                src={university}
                                                alt="university"
                                            />
                                        </div>
                                        <h5 className="title title__fz14">
                                            ЧУП “Минский институт управления”
                                            <br />
                                            <span className="benefit__university-year ">
                                                (2006-2011)
                                            </span>
                                        </h5>
                                    </div>
                                    <div className="benefit__resume-item-body">
                                        <p className="benefit__resume-item-body-text">
                                            Специальность: экономист-менеджер
                                            <br />
                                            Факультет: ЭиУП
                                        </p>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="benefit__resume-item">
                                    <div className="benefit__resume-item-head">
                                        <div className="benefit__resume-item-icon">
                                            <img src={curs} alt="curs1" />
                                        </div>
                                        <h5 className="title title__fz14">
                                            Udemy, Campfire School
                                        </h5>
                                    </div>
                                    <div className="benefit__resume-item-body">
                                        <p className="benefit__resume-item-body-text">
                                            <br />
                                            Курс по Web-разработке и курс по
                                            JavaScript + React
                                        </p>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="benefit__resume-item">
                                    <div className="benefit__resume-item-head">
                                        <div className="benefit__resume-item-icon">
                                            <img src={curs} alt="curs2" />
                                        </div>
                                        <h5 className="title title__fz14">
                                            Campfire School
                                        </h5>
                                    </div>
                                    <div className="benefit__resume-item-body">
                                        <p className="benefit__resume-item-body-text">
                                            <br />
                                            На данный момент прохожу обучение на
                                            курсе Typescript + React
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="benefit__column">
                        <h3 className="title title__fz20 title__resume">
                            Опыт работы
                        </h3>
                        <ul>
                            <li>
                                <div className="benefit__resume-item">
                                    <div className="benefit__resume-item-head">
                                        <div className="benefit__resume-item-icon">
                                            <img
                                                src={developer}
                                                alt="developer"
                                            />
                                        </div>
                                        <h5 className="title title__fz14">
                                            Разработка и создание проектов
                                            <br />
                                            (пока только в рамках обучающего
                                            курса).
                                        </h5>
                                    </div>
                                    <div className="benefit__resume-item-body">
                                        <div className="benefit__resume-item-body-text">
                                            React / SPA-разработка:
                                            <ul className="list-item">
                                                <li className="item">
                                                    Разработка одностраничных
                                                    приложений (SPA) с
                                                    использованием React Hooks.
                                                </li>
                                                <li className="item">
                                                    Управление состоянием
                                                    приложения через Redux
                                                    Toolkit.
                                                </li>
                                                <li className="item">
                                                    Работа с React
                                                    Router (навигация,
                                                    динамические маршруты, lazy
                                                    loading).
                                                </li>
                                                <li className="item">
                                                    Оптимизация
                                                    производительности.
                                                </li>
                                            </ul>
                                            Дополнительно:
                                            <ul className="list-item">
                                                <li className="item">
                                                    Интеграция с REST API /
                                                    GraphQL (Axios, Fetch)
                                                </li>
                                                <li className="item">
                                                    Сборка проекта: Webpack.
                                                </li>
                                            </ul>
                                            Примеры реализованного функционала:
                                            динамическая подгрузка данных,
                                            реализация фильтрации, сортировка,
                                            валидация форм, работа с модальными
                                            окнами и др.
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefit;
