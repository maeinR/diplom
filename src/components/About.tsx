import styled from "styled-components";

const About = () => {
  return (
    <AboutBlockStyle id="about" className="about">
      <svg xmlns="http://www.w3.org/2000/svg" width="550" height="424" viewBox="0 0 550 424" fill="none">
        <g clip-path="url(#clip0_43_1020)">
          <circle cx="-14" cy="102" r="321.5" stroke="white" stroke-opacity="0.5"/>
          <circle cx="401.5" cy="-33.5" r="148" stroke="white" stroke-opacity="0.5"/>
          <circle cx="511.5" cy="65.5" r="7.5" fill="#F14F4F"/>
        </g>
        <defs>
          <clipPath id="clip0_43_1020">
            <rect width="550" height="424" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      <div className="container">
        <h2>Пара слов о нас</h2>
        <p className="about-p">Спорт держит нас в форме. Учит дисциплине. Объединяет нас. Через спорт мы можем менять жизни. В том числе с помощью воодушевляющих историй спортсменов. Чтобы помочь тебе подняться и двигаться вперед. </p>
        <span className="logo">SneakMax</span>
      </div>
      <img src="../public/sneakers.png" alt="Sneakers" className="sneakers" />
    </AboutBlockStyle>
  );
}
const AboutBlockStyle = styled.section`

height: 580px;
background: var(--second);
position: relative;
contain: content;

h2 {
    position: relative;
    padding-top: 200px;
    color: white;
    z-index: 1;
}

p {
    display: block;
    position: relative;
    width: 380px;
    height: 110px;
    padding-top: 20px;
    color: white;
    line-height: 22px;
    z-index: 1;
}

.logo {
    position: relative;
    left: 300px;
    font-size: 20px;
    line-height: 20px;
    color: white;
    z-index: 1;
}

.logo::before {
    content: "";
    display: inline-block;
    position: relative;
    top: -6px;
    width: 30px;
    height: 2px;
    margin-right: 20px;
    background-color: white;
}

.sneakers {
    position: absolute;
    bottom: 0;
    left: 45%;
    z-index: 0;
}

`
export default About;