import { useState } from "react";

const Question = () => {
    const [Switch, setSwitch] = useState(false);

    const handleClick = () => {
        console.log(Switch)
        setSwitch(true);
    };

    return (
        <li>
            <h4>Вопрос 1</h4>
            <img onClick={handleClick} src="../../public/icons/question-plus.svg" alt="" />
            <p>А это ответ 1: в комплексе функционируют 6 детских садов с площадками, воспитателями и всякими другими людьми</p>
        </li>
    );
}

export default Question;