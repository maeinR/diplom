import styled from "styled-components";

const Hero = () => {
  return (
    <HeroStyle>
      <div className="container">
        <h1>Кроссовки известных брендов с доставкой по России и СНГ</h1>
        <p>Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok, Converse и многие другие по низким ценам</p>
        <span className="logo">SneakMax</span>
        <button className="hero-btn btn1">Перейти к покупкам</button>
      </div>
    </HeroStyle>
  );
};
const HeroStyle = styled.section`
  height: 528px;
  background: var(--second);
  contain: content;

  .container {
    position: relative;
    padding-top: 140px;
    height: 310px;
    color: white;
  }
    
  h1 {
    position: relative;
    z-index: 1;
  }

  p {
    display: block;
    width: 480px;
    height: 44px;
    padding-top: 20px;
    line-height: 22px;
    position: relative;
    color: white;
    z-index: 1;
  }

  .logo {
    position: absolute;
    top: 200px;
    left: 100px;
    font-size: 200px;
    line-height: 200px;
    color: rgba(255, 255, 255, 0.2);
    pointer-events: none;
    z-index: 0;
  }

  .hero-btn {
    display: block;
    position: relative;
    margin-top: 50px;
    z-index: 1;
  }

`
export default Hero;
