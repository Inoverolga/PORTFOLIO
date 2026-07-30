import "./aboutMe.scss";
import myFoto from "../../assets/images/Photo2.jpg";

const AboutMe = () => {
    return (
        <section id="aboutme" className="aboutme">
            <div className="container">
                <div className="aboutme__fotoAndContent">
                    <img
                        src={myFoto}
                        alt="myfoto"
                        className="aboutme__foto-my"
                    />
                    <div className="content">
                        <h4 className="title title__fz16 title-aboutme">
                            Про меня
                        </h4>
                        <h2 className="title title__fz36 title-myname">
                            Меня зовут Ольга!
                        </h2>
                        <span className="line"></span>
                        <p className="aboutme__text">
                            Я начинающий программист.
                            <br />
                            <span>Почему программирование?</span> <br />
                            Потому что здесь творчество встречается с логикой, а
                            сложные задачи превращаются в элегантные решения.
                            <br />
                            Код — это поэзия будущего. И я только начинаю писать
                            свои строки...
                        </p>
                        <div className="aboutme__web-wrapper">
                            <div className="aboutme__icon">
                                <svg
                                    width="25"
                                    height="24"
                                    viewBox="0 0 25 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0 0V20.5205H8.02402V21.9877H6.55742V23.4526H18.4425V21.9877H16.9759V20.5205H25V0H0ZM15.511 21.9877H9.48897V20.5205H15.511V21.9877H15.511ZM23.5351 19.0556H1.46489V16.1222H23.5351V19.0556H23.5351ZM23.5351 14.6573H1.46489V1.46494H23.5351V14.6573H23.5351Z"
                                        fill="black"
                                    />
                                    <path
                                        d="M9.95816 5.4134L8.92232 4.37756L5.23877 8.06111L8.92232 11.7446L9.95816 10.7088L7.31045 8.06111L9.95816 5.4134Z"
                                        fill="black"
                                    />
                                    <path
                                        d="M16.0777 4.37756L15.0419 5.4134L17.6896 8.06111L15.0419 10.7088L16.0777 11.7446L19.7612 8.06111L16.0777 4.37756Z"
                                        fill="black"
                                    />
                                    <path
                                        d="M12.6319 3.64405L10.9313 12.1931L12.3681 12.4789L14.0687 3.92986L12.6319 3.64405Z"
                                        fill="black"
                                    />
                                </svg>
                            </div>
                            <div className="aboutme__web-content">
                                <div className="title title__fz14">
                                    Web разработка
                                </div>
                                <p className="aboutme__web-content-text">
                                    Активно развиваюсь в веб-разработке, имею
                                    практический опыт в (рамках обучения на
                                    курсе) создании SPA-приложений на React.
                                    Изучила современный стек технологий, включая
                                    JavaScript (ES6+), React, HTML/CSS, Git.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default AboutMe;
