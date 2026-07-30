import "./percent.scss";

const Percent = () => {
    const data = [
        { title: "Создание сайтов", percent: "100%" },
        { title: "Создание приложений", percent: "85%" },
        { title: "Работа с данными", percent: "90%" },
        { title: "Креативность", percent: "75%" },
        { title: "Создание дизайна", percent: "90%" },
        { title: "Soft skills", percent: "95%" },
    ];

    const block = data.map((item) => {
        return (
            <div>
                <div className="percent__flex">
                    <h5 className="title title__fz14 percent__title ">
                        {item.title}
                    </h5>
                    <p className="percent-number">{item.percent}</p>
                </div>
                <div className="percent__line">
                    <span
                        style={{ width: item.percent }}
                        className="percent__line-yellow"
                    ></span>
                </div>
            </div>
        );
    });

    return (
        <div className="percent">
            <div className="container">
                <div className="percent__grid">{block}</div>
            </div>
        </div>
    );
};

export default Percent;
