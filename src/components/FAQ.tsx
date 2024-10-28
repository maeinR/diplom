// import useState from "react";
import styled from "styled-components";

const FAQ = () => {

  return (
    <FAQBlockStyle id="FAQ">
      <div className="container">
        <h2>Часто задаваемые вопросы</h2>
        <ul>
          <li>
            <h4>Вопрос 1</h4>
            <img src="../../public/icons/question-plus.svg" alt="+" />
            <p>А это ответ 1: в комплексе функционируют 6 детских садов с площадками, воспитателями и всякими другими людьми</p>
          </li>
          <li>
            <h4>Вопрос 2</h4>
            <img src="../../public/icons/question-plus.svg" alt="+" />
            <p>А это ответ 2: в комплексе функционируют 6 детских садов с площадками, воспитателями и всякими другими людьми</p>
          </li>
        </ul>
      </div>
    </FAQBlockStyle>
  );
}

const FAQBlockStyle = styled.section`
contain: content;
margin-top: 40px;

ul {
  margin: 45px 150px 0;
  padding-bottom: 45px;
}

li {
  position: relative;
  display: grid;
  grid-template-columns: auto 100px;
  grid-template-rows: 25px auto;
  gap: 20px;
  padding: 25px 0;
  border-bottom: 2px solid rgba(36, 36, 36, 0.5);
  &:first-child{border-top: 1px solid rgba(36, 36, 36, 0.5);}
}

img {
  justify-self: end
}
img:hover ~ p {  
  position: relative;
  visibility: visible;
}
p {
  position: absolute;
  visibility: hidden;
  font-weight: 400;
  line-height: 22px;
  color: rgba(36, 36, 36, 0.5);
}


`;
export default FAQ;