import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contacts.scss";
import fotoContact from "../../assets/images/Photo.png";
import { FaViber, FaTelegram, FaWhatsapp } from "react-icons/fa";

const Contacts = () => {
    const formRef = useRef();
    const [isLoading, setIsLoading] = useState(false);

    const showPhoneNumber = () => {
        alert("Телефон: +375296624355");
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Основная отправка через EmailJS
        emailjs
            .sendForm(
                "service_4rjwslj",
                "template_7a6s50d",
                formRef.current,
                "stS3VuUOcU5u2C_39",
            )
            .then(() => {
                alert("Сообщение успешно отправлено!");
                formRef.current.reset();
            })
            .catch(() => {
                console.log("Ошибка");
                //     // Резервная отправка через FormSubmit
                //     fetch("https://formsubmit.co/ajax/kuzma-inoverolga@mail.ru", {
                //         method: "POST",
                //         body: new FormData(formRef.current),
                //     })
                //         .then((response) => response.json())
                //         .then(() =>
                //             alert("Сообщение отправлено через резервный канал!"),
                //         )
                //         .finally(() => {
                //             formRef.current.reset();
                //         });
            })
            .finally(() => setIsLoading(false));
    };
    return (
        <section id="contacts" className="contacts">
            <div className="container">
                <div className="contacts__flex">
                    <img
                        src={fotoContact}
                        alt="myfoto"
                        className="contacts__foto"
                    />
                    <div className="contacts__content">
                        <h4 className="title title__fz16 title-contacts">
                            Контакты
                        </h4>
                        <h2 className="title title__fz36 title-myname">
                            Свяжитесь со мной
                        </h2>
                        <span className="line"></span>
                        <p className="title title__fz14 contacts__text">
                            Любым удобным для вас способом:
                        </p>
                        <div className="contacts__messeger">
                            <a
                                href="#!"
                                onClick={showPhoneNumber}
                                className="contacts__link"
                            >
                                <FaViber />
                            </a>
                            <a
                                href="https://t.me/+536590511"
                                className="contacts__link"
                            >
                                <FaTelegram />
                            </a>
                            <a
                                href="#!"
                                onClick={showPhoneNumber}
                                className="contacts__link"
                            >
                                <FaWhatsapp />
                            </a>
                        </div>
                        <p className="title title__fz14 contacts__text">
                            Или оставьте ваши данные и я сама Вам напишу:
                        </p>
                        <form
                            className="contacts__form"
                            ref={formRef}
                            onSubmit={sendEmail}
                        >
                            <div className="contacts__input">
                                <input
                                    required
                                    name="name"
                                    id="name"
                                    type="text"
                                />
                                <label htmlFor="name">Ваше имя</label>
                            </div>
                            <div className="contacts__input">
                                <input
                                    required
                                    name="email"
                                    id="email"
                                    type="email"
                                />
                                <label htmlFor="email">Ваша почта</label>
                            </div>
                            <div className="contacts__textarea">
                                <textarea
                                    name="text"
                                    minLength="30"
                                    placeholder="Сообщение (минимум 30 символов)"
                                    id="text"
                                ></textarea>
                                <label htmlFor="text">Ваше сообщение</label>
                            </div>

                            <div className="contacts__trigger">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="contacts__btns btn"
                                >
                                    {isLoading
                                        ? "Отправка..."
                                        : "Отправить сообщение"}
                                </button>
                                <div className="contacts__policy">
                                    <input required type="checkbox" />
                                    <span>
                                        Я согласен(а) с
                                        <a href="/privacy-policy.html">
                                            политикой конфиденциальности
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Contacts;
