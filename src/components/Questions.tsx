import styled from "styled-components";

const Questions = () => {
  return (
    <QuestionsBlockStyle id="questions">
      <div className="container">
        <div className="form-block">
          <h2>Есть вопросы?</h2>
          <p>Заполните форму и наш менеджер свяжется с вами</p>
          <form action="">
            <input type="text" placeholder="Ваше имя" />
            <input type="tel" placeholder="Номер телефона" />
            <button className="btn1">Отправить</button>
          </form>
        </div>
        <img className="img-inst" src="../../public/icons/insta.png" alt="image" />
        <ul className="inst-photos">
          <li className="img-1"><img src="../../public/inst-1.png" alt="image" /></li>
          <li className="img-2"><img src="../../public/inst-main.png" alt="image" /></li>
          <li className="img-3"><img src="../../public/inst-3.png" alt="image" /></li>
          <li className="img-4"><img src="../../public/inst-2.png" alt="image" /></li>
          <li className="img-5"><img src="../../public/inst-4.png" alt="image" /></li>
        </ul>
      </div>

    </QuestionsBlockStyle>
  );
}
const QuestionsBlockStyle = styled.section`

contain: content;

.container {
  padding: 40px 0;
  display: grid;
  grid-template-columns: 380px 680px;
  grid-template-rows: 55px 336px;
  gap: 40px;
  justify-content: start;
  align-items: end;
}

.form-block {
  height: 402px;
  grid-row: span 2;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--second);
  border-radius: 4px;
  color: white;
}

h2 {
  width: 214px;
  color: white;
}

p {
  display: block;
  width: 260px;
  color: white;
}

form {
  display: flex;
  flex-direction: column;
  width: 340px;
  gap: 10px;
}

input {
  padding: 22px 47px;
  border-radius: 4px;
  border: 0;

  &::placeholder {
  color: rgba(178, 181, 187, 1);
  }
}

.inst-photos {
    display: grid;
    grid-template-columns: 160px 160px 160px 160px;
    grid-template-rows: 160px 160px;
    gap: 15px;
}
.img-inst {
  margin: auto;
  width: 157px;
  height: 55px;
}
.img-2 {
    grid-row: span 2;
    grid-column: span 2;
}

`;
export default Questions;